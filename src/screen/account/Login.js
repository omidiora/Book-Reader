import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {Input, Icon} from '@ui-kitten/components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FormButton from '../../component/FormButton';
import DeviceInfo from 'react-native-device-info';
import Orientation from 'react-native-orientation-locker';
import Validator from 'validatorjs';
import en from 'validatorjs/src/lang/en';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {loginAction} from '../../Redux/action/account';

const useInputState = (initialValue = '') => {
  const [value, setValue] = React.useState(initialValue);
  return {value, onChangeText: setValue};
};

const AlertIcon = props => <Icon {...props} name="alert-circle-outline" />;

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const login = useSelector(state => state.login);
  // const {error} = login;

  const [errors, setError] = useState({});
  const [value, setValues] = useState({
    email: '',
    password: '',
  });

  Validator.setMessages('en', en);

  const handleInputChange = (inputName, inputValue) => {
    setValues({
      ...value,
      [inputName]: inputValue,
    });
  };

  const onSubmit = () => {
    let rules = {
      email: 'required|email',
      password: 'required',
    };

    let validation = new Validator(value, rules, {
      'required.email': 'The Email field is required.',
      'required.password': 'The Password field is required.',
    });

    if (validation.fails()) {
      setError(validation.errors.all());
    } else {
      dispatch(loginAction(value));
    }
  };

  React.useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const renderCaptionEmail = () => {
    return (
      <View style={styles.captionContainer}>
        {AlertIcon(styles.captionIcon)}
        <Text style={styles.captionText}>{errors.email}</Text>
      </View>
    );
  };

  const renderCaptionPassword = () => {
    return (
      <View style={styles.captionContainer}>
        {AlertIcon(styles.captionIcon)}
        <Text style={styles.captionText}>{errors.password}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>SIGN IN</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.error}>{login.error}</Text>
        <View>
          <Input
            size={DeviceInfo.isTablet() ? 'large' : 'medium'}
            textStyle={styles.input}
            placeholder="Email"
            style={styles.boder}
            name="email"
            onChangeText={value => handleInputChange('email', value)}
            value={value.email}
            caption={renderCaptionEmail}
          />
        </View>

        <View style={{top: 20}}>
          <Input
            size={DeviceInfo.isTablet() ? 'large' : 'medium'}
            textStyle={styles.inputTwo}
            placeholder="Password"
            caption={renderCaptionPassword}
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            style={styles.boder}
            onChangeText={value => handleInputChange('password', value)}
            value={value.password}
          />
        </View>
      </View>
      <View style={styles.button}>
        <FormButton onSubmit={onSubmit} buttonTitle="Sign In" />

        <View style={styles.lastContainer}>
          <TouchableOpacity>
            <Text
              style={{
                textAlign: 'center',
                left: 100,
                color: '#302675',
                fontSize: DeviceInfo.isTablet() ? 30 : 18,
              }}>
              Forgot password?
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', left: 100, top: 5}}>
            <View>
              <Text style={{fontSize: DeviceInfo.isTablet() ? 23 : 12, top: 3}}>
                Don’t have an account?{' '}
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text
                style={{
                  color: '#302675',
                  fontSize: DeviceInfo.isTablet() ? 23 : 12,
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    top: 100,
  },
  input: {
    marginVertical: 2,
    borderColor: 'black',
    width: DeviceInfo.isTablet() ? 50 : 30,
    height: DeviceInfo.isTablet() ? 40 : 37,
    fontSize: DeviceInfo.isTablet() ? 30 : 17,
    alignSelf: 'center',
    // borderWidth:1
  },
  inputTwo: {
    marginVertical: 2,
    borderColor: 'black',
    width: DeviceInfo.isTablet() ? 50 : 3,
    height: DeviceInfo.isTablet() ? 40 : 37,
    fontSize: DeviceInfo.isTablet() ? 30 : 17,
    alignSelf: 'center',
  },
  inputContainer: {
    //   flexDirection:'column',
    //   justifyContent:'space-between',
    width: '80%',
    justifyContent: 'center',
    top: hp(20),
    alignSelf: 'center',
  },

  text: {
    textAlign: 'center',
    top: hp(13),
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    fontWeight: 'bold',
  },
  button: {
    position: 'absolute',
    top: hp('48%'),
    width: '80%',
    left: DeviceInfo.isTablet() ? hp(7) : hp(4),
    alignSelf: 'center',
  },
  lastContainer: {
    flexDirection: 'column',
    top: hp('12%'),
    position: 'absolute',
    left: DeviceInfo.isTablet() ? hp(10) : hp(-3),
  },
  boder: {
    borderColor: 'black',
    borderWidth: 1,
  },

  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'opensans-regular',
    color: '#DB303C',
  },
  error: {
    color: '#DB303C',
    textAlign: 'center',
    bottom: 10,
  },
});

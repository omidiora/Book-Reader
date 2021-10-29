import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/Dimension';
import DeviceInfo from 'react-native-device-info';
import {Input, Icon} from '@ui-kitten/components';
import Orientation from 'react-native-orientation-locker';
import FormButton from '../../component/FormButton';
import {RegisterAction} from '../../Redux/action/account';
import {useSelector, useDispatch} from 'react-redux';
import Validator from 'validatorjs';
import en from 'validatorjs/src/lang/en';

// RegisterAction
const AlertIcon = props => <Icon {...props} name="alert-circle-outline" />;

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const [errors, setError] = useState({});
  const [value, setValues] = useState({
    email: '',
    password: '',
    lastName: '',
    phoneNumber: '',
    firstName: '',
  });
  const register = useSelector(state => state.register);

  React.useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

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
      phoneNumber: 'required',
      lastName: 'required|min:4',
      firstName: 'required|min:4',
    };

    let validation = new Validator(value, rules, {
      'required.email': 'The Email  is required.',
      'required.firstName': 'The Firstname is required.',
      'required.lastName': 'The Lastname is required.',
      'required.phoneNumber': 'The  Phone number is required.',
    });

    if (validation.fails()) {
      setError(validation.errors.all());
    } else {
      dispatch(RegisterAction(value));
    }
  };

  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const renderCaptionFirstName = () => {
    return (
      <View style={styles.captionContainer}>
        {AlertIcon(styles.captionIcon)}
        <Text style={styles.captionText}>{errors.firstName}</Text>
      </View>
    );
  };

  const renderCaptionLasttName = () => {
    return (
      <View style={styles.captionContainer}>
        {AlertIcon(styles.captionIcon)}
        <Text style={styles.captionText}>{errors.lastName}</Text>
      </View>
    );
  };

  const renderCaptionEmail = () => {
    return (
      <View style={styles.captionContainer}>
        {AlertIcon(styles.captionIcon)}
        <Text style={styles.captionText}>{errors.email}</Text>
      </View>
    );
  };

  const renderCaptionPhone = () => {
    return (
      <View style={styles.captionContainer}>
        {AlertIcon(styles.captionIcon)}
        <Text style={styles.captionText}>{errors.phoneNumber}</Text>
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
      <View style={styles.header}>
        <Text style={styles.headerText}>SIGN UP</Text>
      </View>
      <View style={{top: 10}}>
        <Text style={{textAlign: 'center', color: 'red'}}>
          {register.error}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Input
          size={DeviceInfo.isTablet() ? 'large' : 'medium'}
          textStyle={styles.input}
          placeholder="First Name"
          style={styles.boder}
          name="firstName"
          onChangeText={value => handleInputChange('firstName', value)}
          caption={renderCaptionFirstName}
        />
      </View>
      <View style={styles.inputContainerTwo}>
        <Input
          size={DeviceInfo.isTablet() ? 'large' : 'medium'}
          textStyle={styles.input}
          placeholder="Last Name"
          name="lastName"
          style={styles.boder}
          onChangeText={value => handleInputChange('lastName', value)}
          caption={renderCaptionLasttName}
        />
      </View>
      <View style={{top: DeviceInfo.isTablet() ? 54 : 40}}>
        <Input
          size={DeviceInfo.isTablet() ? 'large' : 'medium'}
          textStyle={styles.input}
          placeholder="Email"
          style={styles.boder}
          name="email"
          onChangeText={value => handleInputChange('email', value)}
          caption={renderCaptionEmail}
        />
      </View>
      <View style={styles.inputContainerThree}>
        <Input
          size={DeviceInfo.isTablet() ? 'large' : 'medium'}
          textStyle={styles.input}
          placeholder="Phone No."
          style={styles.boder}
          name="phoneNumber"
          onChangeText={value => handleInputChange('phoneNumber', value)}
          caption={renderCaptionPhone}
        />
      </View>
      <View style={styles.inputContainerFour}>
        <Input
          size={DeviceInfo.isTablet() ? 'large' : 'medium'}
          textStyle={styles.input}
          placeholder="Password"
          name="password"
          style={styles.boder}
          onChangeText={value => handleInputChange('password', value)}
          caption={renderCaptionPassword}
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
        />
      </View>

      <View style={styles.buttonContainer}>
        <FormButton onSubmit={onSubmit} buttonTitle="Sign up" />
      </View>
      <View style={styles.lastContainer}>
        <View>
          <Text>Already have an account? </Text>
        </View>

        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <Text styles={styles.text}> Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: windowHeight / 13,
    width: DeviceInfo.isTablet() ? 800 : 350,
    left: 27,
    marginTop: 40,
  },
  inputContainer: {
    top: windowHeight / 40,
  },
  header: {
    top: windowHeight / 120,
    left: '40%',
  },
  headerText: {
    fontSize: DeviceInfo.isTablet() ? 60 : 17,
    marginBottom: 30,
  },
  inputContainerTwo: {
    top: DeviceInfo.isTablet() ? 44 : 30,
  },
  inputContainerThree: {
    top: DeviceInfo.isTablet() ? 64 : 50,
  },
  inputContainerFour: {
    top: DeviceInfo.isTablet() ? 74 : 65,
  },
  boder: {
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonContainer: {
    top: DeviceInfo.isTablet() ? 74 : 66,
    right: 10,
  },
  lastContainer: {
    flexDirection: 'row',
    top: 110,
    textAlign: 'center',
    left: DeviceInfo.isTablet() ? 254 : 50,
  },
  text: {
    color: 'rgba(112, 108, 97, 0.9)',
    fontWeight: 'normal',
    fontFamily: 'Poppins-Medium',
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

export default Register;

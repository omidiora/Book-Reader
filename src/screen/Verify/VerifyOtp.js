import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {VerifyToken} from '../../Redux/action/account';
import FormButton from '../../component/FormButton';
import FormButtonCustom from '../../component/FormCustomButton';

const Otp = () => {
  const [code, setCode] = React.useState('');
  const state = useSelector(state => state.VerifyOtp);
  console.log(state)
  const [disabled, setDisable] = React.useState(true);

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(VerifyToken(code));
  };


  return (
    <View style={styles.container}>
      <View style={{}}>
        <Text style={styles.input}>Enter Your Email Verification Code </Text>
      </View>
      <View>
        <OTPInputView
          style={{width: '80%', height: 200}}
          pinCount={6}
          code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          onCodeChanged={code => setCode(code)}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={() => setDisable(false)}
          editable={true}
        />
      </View>
      <FormButtonCustom
        disabled={disabled}
        buttonTitle="Done"
        bgColor={disabled ? '#cccccc' : '#302675'}
        textColor={disabled ? 'black' : 'white'}
        onSubmit={onSubmit}
      />

      <View style={{flexDirection: 'row', width: '100%', top: 13}}>
        <Text style={{fontSize: 13, color: 'rgba(112, 108, 97, 0.9)'}}>
          Did you receive the email verification code?{' '}
        </Text>
        <Text style={{fontSize: 13, color: '#302675'}}>Resend Code</Text>
      </View>
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: 'black',
    color: 'black',
  },

  underlineStyleHighLighted: {
    borderColor: '#302675',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    left: 36,
    top: 170,
  },
  input: {
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
});

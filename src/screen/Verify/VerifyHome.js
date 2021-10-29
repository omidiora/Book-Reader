import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FormCustomButton from '../../component/FormCustomButton';
import FormButton from '../../component/FormButton';
import {windowWidth} from '../../utils/Dimension';
import Orientation from 'react-native-orientation-locker';
import DeviceInfo from 'react-native-device-info';

const VerifyHome = ({navigation}) => {
  React.useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Verify Your Email Address</Text>
      </View>
      <View>
        <Text style={styles.text}>
          Please verify your email. Confirm your email address. Read about this
          email at Yabure.com
        </Text>
      </View>

      <View style={styles.button}>
        <FormButton
          buttonTitle="Verify"
          onSubmit={() => navigation.navigate('VerifyOtp')}
        />
      </View>

      <View style={styles.buttonTwo}>
        {/* <FormCustomButton
          textColor="black"
          bgColor="#FFFFFF"
          buttonTitle="Verify"
        /> */}
      </View>
    </View>
  );
};

export default VerifyHome;

const styles = StyleSheet.create({
  container: {
    top: '20%',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Poppins-ExtraBold',
  },
  text: {
    textAlign: 'center',
    color: '#555145',
    fontFamily: 'Poppins-Light',
  },
  button: {
    height: 15,
    width: windowWidth / 1.2,
    alignSelf: 'center',
  },
  buttonTwo: {
    top: DeviceInfo.isTablet() ? 80 : 50,
    width: windowWidth / 1.2,
    alignSelf: 'center',
    left: 10,
  },
});

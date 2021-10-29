import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Orientation from 'react-native-orientation-locker';
import {Button, Icon, Layout, Spinner} from '@ui-kitten/components';
import FormButton from '../../component/FormButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnboardingScreen = props => {
  const [loading, setLoading] = React.useState(true);

  const {navigation} = props;

  React.useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  const Dots = ({selected}) => {
    let backgroundColor;
    backgroundColor = selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)';
    return (
      <View
        style={{
          width: 6,
          height: 6,
          marginHorizontal: 3,
          backgroundColor,
          right: 130,
        }}
      />
    );
  };

  const NextButton = props => (
    <View style={{width: 120, height: 60, marginRight: 10}}>
      <FormButton
        buttonText
        buttonTitle="Next"
        color="#000000"
        {...props}
        Icon={
          <Icon style={styles.icon} fill="#fff" name="arrow-forward-outline" />
        }
      />
    </View>
  );

  const DoneButton = props => (
    <View style={{width: 120, height: 60, marginRight: 10}}>
      <FormButton buttonText buttonTitle="Start" color="#000000" {...props} />
    </View>
  );

  const onDone = () => {
    // After user finished the intro slides. Show real app through
    // navigation or simply by controlling state
    AsyncStorage.setItem('first_time', 'true').then(() => {
      setLoading(false);
      navigation.navigate('Login');
    });
  };

  return (
    <Onboarding
      onDone={onDone}
      showSkip={false}
      NextButtonComponent={NextButton}
      DoneButtonComponent={DoneButton}
      DotComponent={Dots}
      pages={[
        {
          titleStyles: {
            fontFamily: 'Poppins-ExtraBold',
            fontWeight: '600',
          },
          subTitleStyles: {
            fontFamily: 'Poppins-Medium',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: '#555145',
            opacity: 0.9,
          },
          backgroundColor: '#fff',
          image: (
            <Image source={require('../../assets/images/OpenDoodles.png')} />
          ),
          title: 'Your Books organizer',
          subtitle:
            'ARRANGE ALL YOUR NOTES INTO ONE EASY TO READ OFFLINE LIBRARY',
        },
        {
          titleStyles: {
            fontFamily: 'Poppins-ExtraBold',
            fontWeight: '600',
          },
          subTitleStyles: {
            fontFamily: 'Poppins-Medium',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: '#555145',
            opacity: 0.9,
          },
          backgroundColor: '#fff',
          image: (
            <Image source={require('../../assets/images/OpenDoodles.png')} />
          ),
          title: 'Control your studying',
          subtitle:
            'Choose when you study and choose the books you need to study anytime you want.',
        },

        {
          titleStyles: {
            fontFamily: 'Poppins-Medium',
            fontWeight: 'bold',
          },
          subTitleStyles: {
            fontFamily: 'Poppins-Medium',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: '#555145',
            opacity: 0.9,
          },

          backgroundColor: '#fff',
          image: (
            <Image source={require('../../assets/images/OpenDoodles2.png')} />
          ),
          title: 'Limitless Access To Books',
          subtitle: '',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    left: 14,
  },
});

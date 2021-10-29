import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  HeaderBackButton,
} from '@react-navigation/native-stack';
import OnboardingScreen from '../screen/Onboarding/OnboardingScreen';
import Login from '../screen/account/Login';
import Register from '../screen/account/Register';
import Interest from '../screen/interests/Interest';
import VerifyHome from '../screen/Verify/VerifyHome';
import VerifyOtp from '../screen/Verify/VerifyOtp';
import {Icon} from '@ui-kitten/components';
import Uploader from '../screen/Upload/Index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const hideOnboarding = AsyncStorage.getItem('first_time');

function ScreenPage() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnboardingScreen">
        {/* {hideOnboarding ? (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={{headerShown: false}}
          />
        )} */}

        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Interests"
          component={Interest}
          options={{
            title: 'What are your interests?',
            headerShadowVisible: false,
            headerTitleStyle: {
              fontWeight: 'normal',
              fontFamily: 'Poppins-ThinItalic',
              backgroundColor: 'tomato',
            },
            headerLeft: () => (
              <View
                style={{
                  flexDirection: 'row',
                  width: 60,
                  justifyContent: 'space-between',
                }}>
                <Icon
                  style={styles.icon}
                  fill="#8F9BB3"
                  name="arrow-back-outline"
                />
              </View>
            ),
          }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="VerifyHome"
          component={VerifyHome}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="VerifyOtp"
          component={VerifyOtp}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Uploader"
          component={Uploader}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ScreenPage;
const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
});

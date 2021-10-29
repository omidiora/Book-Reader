import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimension';
import DeviceInfo from 'react-native-device-info';

const FormButton = ({buttonTitle, Icon, disabled, onSubmit, ...rest}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles.buttonContainer}
      onPress={onSubmit}
      {...rest}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={styles.buttonText}>{buttonTitle}</Text>
        </View>

        <View>{Icon}</View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    left: 10,
    height: windowHeight / 17,
    backgroundColor: '#302675',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    borderColor: '#C4C4C4',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: DeviceInfo.isTablet() ? 30 : 15,
    fontWeight: '500',
    color: '#FFFFFF',
    fontFamily: 'Lato-Regular',
  },
  arrowRight: {
    color: '#FFFFFF',
    fontWeight: 'normal',
    fontSize: 13,
    fontWeight: '100',
    bottom: 10,
  },
});

export default FormButton;

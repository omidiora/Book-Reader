import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimension';
import DeviceInfo from 'react-native-device-info';

const FormButtonCustom = ({
  buttonTitle,
  disabled,
  onSubmit,
  bgColor,
  textColor,
  ...rest
}) => {
  return (
    <TouchableOpacity
      onPress={onSubmit}
      disabled={disabled}
      style={[styles.buttonContainer, {backgroundColor: bgColor}]}
      {...rest}>
      <Text style={[styles.buttonText, {color: textColor}]}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    // backgroundColor:'yellow',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 1,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: DeviceInfo.isTablet() ? 30 : 15,
  },
});

export default FormButtonCustom;

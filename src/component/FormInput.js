import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimension';

const FormInput = ({labelValue, placeholderText, iconType, error, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={2}
        placeholder={placeholderText}
        placeholderTextColor="#555555"
        {...rest}
      />
      <View style={{position: 'absolute', top: 42, left: 1}}>
        <View>{error}</View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    borderColor: '#707070',
    borderRadius: 3,
    borderWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: 3,
    paddingTop: 2,
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderRadius: 2,
    // backgroundColor:'#ffffff',
    borderColor: '#555555',
    borderWidth: 1,
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});

export default FormInput;

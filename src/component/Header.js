import React from 'react';
import {View, Text, SafeAreaView, StyleSheet , TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({title, onPress}) => {
  return (
    <TouchableOpacity style={{backgroundColor: '#FFFFFF'}} onPress={onPress}>
      <View style={styles.header}>
        <Icon name="arrow-back-ios" size={21} color={'#686B6F'} />
      </View>
      <View style={{position: 'absolute'}}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.line}></View>
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingVertical: 18,
    textAlign: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },

  line: {
    width: '100%',
    height: 0,
    left: 0,
    top: 49,
    opacity: 0.1,
    borderWidth: 0.8,
    borderRadius: 1,
    position: 'absolute',
    borderStyle: 'solid',
  },
  text: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginLeft: 150,
    marginTop: 20,
    fontWeight: 'bold',
  },
});

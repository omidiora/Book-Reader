import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FormButtonCustom from '../../component/FormCustomButton';
import FormInput from '../../component/FormInput';
import Header from '../../component/Header';
import {useSelector, useDispatch} from 'react-redux';
import {GetuploadDocuments} from '../../Redux/action/uploadDocument';
import {interest} from '../../Redux/action/Interest';

const Uploader = () => {
  useEffect(() => {
    dispatch(GetuploadDocuments());
    dispatch(interest());
  }, []);

  const document = useSelector(state => state);
  const interests = useSelector(state => state);
  console.log(document, 'interest');
r
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{backgroundColor: '	#FFFFFF'}}>
      <Header title={'Uploader'} />

      <View style={styles.upload}>
        <Text style={styles.text1}>No Uploads Yet</Text>
        <Text style={styles.text2}>Upload notes and make money doing so </Text>
      </View>

      <View style={styles.imageContainer}>
        {/* <Image style={styles.image} source={require('../assets/camera.png')} /> */}
      </View>
      <View style={styles.buttonContainer}>
        <FormButtonCustom
          buttonTitle="Upload Notes"
          bgColor="#302675"
          textColor="#FFFFFF"
        />
      </View>
    </SafeAreaView>
  );
};

export default Uploader;

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
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 210,
  },
  image: {
    width: '11%',
    height: '40%',
    resizeMode: 'contain',
  },
  upload: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    top: 90,
    fontSize: 570,
  },
  text1: {
    position: 'absolute',
    width: 155,
    height: 25,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 21,
    lineHeight: 25,
    color: '#333333',
    opacity: 0.5,
  },
  text2: {
    position: 'absolute',
    width: 285,
    height: 25,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 18,
    color: '#333333',
    opacity: 0.5,
    top: 27,
  },
  buttonContainer: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    left: 90,
    bottom: 30,
  },
});

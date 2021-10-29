import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {interest} from '../../Redux/action/Interest';
import {windowHeight, windowWidth} from '../../utils/Dimension';
import FormButton from '../../component/FormButton';

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.field}</Text>
  </TouchableOpacity>
);

const Interest = () => {
  const interestData = useSelector(state => state.interest.interest);
  const [interestField, setInterestField] = React.useState([]);
  const windowWidth = useWindowDimensions().width;

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(interest());
  }, [dispatch, interest]);

  React.useEffect(() => {
    setInterestField(interestData);
  }, [interestData, interestField]);

  const selectItem = data => {
    data.selected = !data.selected;
    const index = interestData.findIndex(item => data.id === item);
    interestData[index] = data.item;
    setInterestField(interestData[index]);
  };

  const renderItem = ({item}) => {
    const backgroundColor = item.selected ? '#302675' : 'white';
    const color = item.selected ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => selectItem(item)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          This helps us to find you more relevant content{' '}
        </Text>
      </View>
      <View style={styles.interestField}>
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          data={interestField}
          renderItem={item => renderItem(item)}
          numColumns={2}
          extraData={interestField}
          horizontal={false}
        />
      </View>
      <View style={styles.buttonContainer}>
        <FormButton buttonTitle="Next" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: windowHeight / 14,
    width: windowWidth / 0.9,
  },
  text: {
    fontSize: 13,
    textAlign: 'center',
    top: 10,
  },
  interestField: {
    top: 50,
    alignItems: 'center', //
    justifyContent: 'center',
    position: 'absolute',
  },
  item: {
    // marginTop: 10,
    width: '38%',
    // left: 10,
    height: windowHeight / 17,
    backgroundColor: '#302675',
    // padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    borderColor: '#C4C4C4',
    borderWidth: 1,
    padding: 2,
    marginVertical: 20,
    marginHorizontal: 16,
  },
  buttonContainer: {
    top: windowHeight / 2,
    width: windowWidth / 1.4,
    alignSelf: 'center',
    right: 30,
  },
});

export default Interest;

import React from 'react';
import {useState} from 'react';
import {TextInput, View, StyleSheet, Image} from 'react-native';

const SearchBox = (props) =>{
  const [searchString, setSearchString] = useState('');

  return (
    <View style={styles.box}>
      <Image style={styles.icon} source={require('./assets/search.png')}/>
      <TextInput placeholder={props.placeholder} placeholderTextColor='#68999e' value={searchString}
                  onChangeText={setSearchString} onSubmitEditing={props.onSubmit}
                  style={styles.text}/>
    </View>
  )
}

const styles = StyleSheet.create({
  box : {
    backgroundColor:'#262625',
    flexDirection:'row',
    alignItems: 'center',
    borderStyle:'solid',
    borderWidth: 3,
    borderColor: '#d4f1f4',
    borderRadius: 20,
    margin: 10,
  },
  icon : {
    width : 25,
    height : 25,
    padding: 5,
    margin: 5,
    tintColor: '#d4f1f4'
  },
  text:{
    flex:1,
    padding: 5,
    margin: 5,
    color: '#d4f1f4'
  }
})

export default SearchBox;

import React from 'react';
import {TouchableOpacity, Image, StyleSheet, Text} from 'react-native';


const SmallResult = (props) =>{

  return (
    <TouchableOpacity style={styles.back} onPress={() => props.onPress(props.data)}>
      <Image style={styles.img} source={{uri: props.data.image}} />
      <Text style={styles.text}>{props.data.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  back :{
    flexDirection : 'column',
    alignItems :'center',
    backgroundColor:  '#161615',
    margin: 5
  },
  img :{
    height: 225,
    width: 150,
    margin: 10
  },
  text :{
    color : '#d4f1f4',
    fontSize: 15,
    margin : 5
  }
})

export default SmallResult;

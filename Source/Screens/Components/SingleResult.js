import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet, View} from 'react-native';


const SingleResult = (props) =>{

  return (
    <TouchableOpacity style={styles.back} onPress={() => props.onPress(props.data)}>
      <Image style={styles.img} source={{uri: props.data.image}} />
      <Text style={styles.text}>{props.data.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  back :{
    flexDirection : 'row',
    alignItems :'center',
    borderBottomColor: '#3e3b39',
    borderBottomWidth: 5,
  },
  img :{
    height: 135,
    width: 90,
    margin: 10
  },
  text :{
    color : '#d4f1f4',
    fontSize: 20,
    margin : 5
  }
})

export default SingleResult;

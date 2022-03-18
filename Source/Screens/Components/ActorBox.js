import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet, View} from 'react-native';


const ActorBox = (props) =>{

  return (
    <TouchableOpacity style={styles.back} onPress={() => props.onPress('ActorScreen', {Actor: props.data})}>
      <Image style={styles.img} source={{uri: props.data.image}} />
      <Text style={styles.text}>{props.data.name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  back :{
    flexDirection : 'column',
    alignItems :'center',
    justifyContent: 'space-around',
    backgroundColor:  '#161615',
    margin: 5,
    padding: 10,
    width: 170,
  },
  img :{
    height: 210,
    width: 150,
  },
  text :{
    color : '#d4f1f4',
    fontSize: 15,
  }
})

export default ActorBox;

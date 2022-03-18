import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet, View} from 'react-native';


const SeasonsBox = (props) =>{

  return (
    <TouchableOpacity style={styles.back} onPress={() => props.onPress('SeasonScreen', {Title: props.title, Season: props.data}, )}>
      <Text style={styles.text}>{props.data}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  back :{
    flexDirection : 'row',
    alignItems :'center',
    justifyContent: 'center',
    backgroundColor:  '#161615',
    margin: 5,
    width: 150,
    height: 200,

  },
  innerContainer:{
    flex:1
  },
  text :{
    color : '#d4f1f4',
    fontSize: 30,
    margin : 5,
    textAlign: 'center',
  }
})

export default SeasonsBox;

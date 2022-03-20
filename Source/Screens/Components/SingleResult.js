import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

const SingleResult = (props) =>{
  return (
    <TouchableOpacity style={styles.back} onPress={() => props.onPress('DetailsScreen', {Title: props.data})}>
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
    height: 200,
    width: 150,
    margin: 10
  },
  text :{
    flex:1,
    color : '#d4f1f4',
    textAlign: 'center',
    fontSize: 20,
    margin : 5
  }
})

export default SingleResult;

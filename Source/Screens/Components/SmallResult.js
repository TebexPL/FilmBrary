import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';


const SmallResult = (props) =>{

  return (
    <TouchableOpacity style={styles.back} onPress={() => props.onPress(props.data)}>
      <Image style={styles.img} source={{uri: props.data.image}} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  back :{
    flexDirection : 'column',
    alignItems :'center',
  },
  img :{
    height: 225,
    width: 150,
    margin: 10
  }
})

export default SmallResult;

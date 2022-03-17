import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet, View} from 'react-native';


const ActorBox = (props) =>{

  return (
    <View style={styles.back}>
      <Image style={styles.img} source={{uri: props.data.image}} />
      <View style={styles.innerContainer}>
        <Text style={styles.text}>{props.data.name}</Text>
        <Text style={styles.text}>as</Text>
        <Text style={styles.text}>{props.data.asCharacter}</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  back :{
    flexDirection : 'row',
    alignItems :'center',
    backgroundColor:  '#161615',
    margin: 5,
    width: 300
  },
  innerContainer:{
    flex:1
  },
  img :{
    height: 200,
    width: 125,
    margin: 10
  },
  text :{
    color : '#d4f1f4',
    fontSize: 15,
    margin : 5
  }
})

export default ActorBox;

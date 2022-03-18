import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet, View} from 'react-native';


const EpisodeBox = (props) =>{

  return (
    <TouchableOpacity style={styles.back} onPress={() => props.onPress(props.data)}>
      <Image style={styles.img} source={{uri: props.data.image}} />
      <View style={styles.innerContainer}>
          <Text style={styles.text}>Episode {props.data.episodeNumber}</Text>
          <Text style={styles.text}>{props.data.title}</Text>
      </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  back :{
    flexDirection : 'row',
    alignItems :'center',
    backgroundColor:  '#161615',
    margin: 5,
  },
  innerContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',

  },
  img :{
    height: 250,
    width: 200,
    margin: 10
  },
  text :{
    textAlignVertical: 'center',
    color : '#d4f1f4',
    fontSize: 20,
    margin : 10
  }
})

export default EpisodeBox;

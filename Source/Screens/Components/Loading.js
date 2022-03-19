import React from 'react';
import {View, Image, StyleSheet} from 'react-native';


const Loading = () =>{

  return (
    <View style={styles.back}>
      <Image  source={{uri: 'https://readslist.com/readslist/loading.gif'}} style={styles.image} />

    </View>
  )
}

const styles = StyleSheet.create({
  back : {
    backgroundColor : '#262625',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image : {
    height: 200,
    width: 200
  }
})

export default Loading;

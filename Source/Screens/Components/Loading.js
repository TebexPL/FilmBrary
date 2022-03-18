import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity} from 'react-native';


const Loading = (props) =>{

  return (
    <View style={styles.back}>
      <Text>LOADING</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  back : {
    backgroundColor : '#262625',
    flex:1
  },

})

export default Loading;

import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity} from 'react-native';


const Error = (props) =>{

  return (
    <View style={styles.back}>
      <Text>ERROR</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  back : {
    backgroundColor : '#262625',
    flex:1
  },

})

export default Error;

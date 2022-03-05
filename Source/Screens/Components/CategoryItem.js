import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';


const CategoryItem = (props) =>{

  return(
    <TouchableOpacity onPress={() => props.onPress(props.data)}>
      <Text style={styles.text}>{props.data.name}</Text>
      <View style={styles.line}></View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  text : {
    color: '#d4f1f4',
    fontSize: 18,
    padding: 8,
    fontWeight: 'bold',
    margin: 2,
  },
  line : {
    marginRight: "6%",
    borderWidth:2,
    borderBottomColor: '#262625',
    borderBottomLeftRadius: 10,
  }
})

export default CategoryItem;

import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const CategoryItem = (props) =>{
  return(
    <TouchableOpacity style={styles.box} onPress={() => props.onPress('CategoryScreen', {Category: props.data})}>
      <Text style={styles.text}>{props.data.name}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  text : {
    color: '#d4f1f4',
    fontSize: 18,
    fontWeight: 'bold',
  },
  box:{
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    padding:10,
    paddingBottom: 10
  },
  line : {
    marginRight: "6%",
    height: 2,
    backgroundColor: '#262625',
  }
})

export default CategoryItem;

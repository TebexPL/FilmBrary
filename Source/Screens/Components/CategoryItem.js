import React from 'react';
import {Text, TouchableOpacity} from 'react-native';


const CategoryItem = (props) =>{

  return(
    <TouchableOpacity onPress={() => props.onPress(props.data.queryStr)}>
      <Text>{props.data.name}</Text>
    </TouchableOpacity>
    )
}

export default CategoryItem;

import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';


const SingleResult = (props) =>{

  return (
    <TouchableOpacity onPress={() => props.onPress(props.data.id)}>
      <Image source={{uri: props.data.image}} />
      <Text>{props.data.title}</Text>
    </TouchableOpacity>
  )


}

export default SingleResult;

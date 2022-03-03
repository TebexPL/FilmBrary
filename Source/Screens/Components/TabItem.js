import React from 'react';
import {useState} from 'react';

import {Text, View} from 'react-native';


const TabItem = (props) =>{

  return(
    <View>
      <Text style={{color: props.focused?'black':'grey'}}>{props.route.name}</Text>
      <Text>Coś jeszcze</Text>
    </View>
    )
}

export default TabItem;

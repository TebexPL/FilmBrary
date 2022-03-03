import React from 'react';
import {Text, View} from 'react-native';


const TabItem = (props) =>{

  return(
    <View>
      <Text style={{color: props.focused?'black':'grey'}}>{props.route.name}</Text>
    </View>
    )
}

export default TabItem;

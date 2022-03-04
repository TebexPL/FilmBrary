import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import { parseComponentStack } from 'react-native/Libraries/LogBox/Data/parseLogBoxLog';

let link = '';

const checkIcon = (name) => {
  switch (name) {
    case 'Categories':
      link = 'https://cdn-icons.flaticon.com/png/512/498/premium/498682.png?token=exp=1646334579~hmac=50fdfa27ad7792b78badaaad1a01bf97';
      break;
    case 'Best 250 Movies':
      link = 'https://cdn-icons-png.flaticon.com/512/633/633832.png';
      break;
    case 'Best 250 TV Series':
      link= 'https://cdn-icons.flaticon.com/png/512/2758/premium/2758340.png?token=exp=1646334812~hmac=e5293fbdad86f542779ca9eedbd1cd43';
      break;
    case 'Search':
      link='https://cdn-icons-png.flaticon.com/512/49/49116.png';
      break;
    default:
      link='https://cdn-icons-png.flaticon.com/512/633/633832.png';
      break;
  }
  return link;
}

const TabItem = (props) =>{

  return(
    <View style={styles.back}>
      <Image style={styles.icon} source={{uri : checkIcon(props.route.name)}} tintColor={props.focused ? '#68999e' : '#d4f1f4' } />
    </View>
    )
}

const styles = StyleSheet.create({
  back : {
      backgroundColor: '#3e3b39'
  },
  icon : {
      width:30, 
      height:30,
      padding: 5
  }
})

export default TabItem;

import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const image = {
  'Home': require('./assets/home.png'),
  'Categories': require('./assets/movie.png'),
  'Best 250 Movies': require('./assets/reel.png'),
  'Best 250 TV Series': require('./assets/tv.png'),
  'Search': require('./assets/search.png')
}

const TabItem = (props) =>{

  return(
    <View style={styles.back}>
      <Image style={styles.icon} source={image[props.route.name]} tintColor={props.focused ? '#68999e' : '#d4f1f4' } />
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

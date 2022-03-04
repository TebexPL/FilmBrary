import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

import HeaderLine from './Components/HeaderLine';

const DetailsScreen = (props) =>{
  const [data, setData] = useState({})

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
      const queryString = props.route.params.TitleID;
      try{
        const result = await (await fetch('https://imdb-api.com/en/API/Title/k_m73z3hkh/'+queryString)).json();
        setData(result);
      }
      catch(error){
        console.error(error);
      }
  }

  return (
    <View style={styles.back}>
      <HeaderLine onPress={() => {props.navigation.goBack()}}/>
        <ScrollView >
          <View style={styles.upperBox}>
            <Image style={styles.img} source={{uri : data.image}}/>
            <Text style={styles.rating}>Rating: {data.imDbRating}</Text>
          </View>
          <Text style={styles.title}>{data.fullTitle}</Text>
          <Text style={styles.keywords}>Keywords: {data.keywords}</Text>
          <Text style={styles.plot}>{data.plot}</Text>
          <View style={styles.marginBox}></View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  back : {
    backgroundColor : '#262625',
    height:700
  },
  upperBox : {
    flexDirection : 'row'
  },
  img : {
    height: 360,
    width: 240,
    margin: 15,
  },
  title : {
    color: '#d4f1f4',
    fontWeight: 'bold',
    margin: 15,
    textAlign: 'center',
    fontSize: 25
  },
  rating : {
    color: '#68999e',
    margin: 10
  },
  keywords : {
    color: '#68999e',
    margin: 25,
    textAlign: 'justify'
  },
  plot : {
    color: '#d4f1f4',
    backgroundColor: '#3e3b39',
    borderRadius: 15,
    textAlign:'justify',
    padding: 15,
    margin: 15
  },
  marginBox : {
    marginBottom : 69
  }
})

export default DetailsScreen;

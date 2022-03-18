import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, FlatList} from 'react-native';

import HeaderLine from './Components/HeaderLine';
import SmallResult from './Components/SmallResult';
import Loading from './Components/Loading';
import Error from './Components/Error';
import {FetchData} from './Common/Common.js';

const ActorScreen = (props) =>{
  const [data, setData] = useState(undefined)
  useEffect(()=>{fetchData()}, []);

  const fetchData = async () =>{
    const result = await FetchData('Name', '/'+props.route.params.Actor.id);
    result===null?setData(null):setData(result);
  }

  if(data===undefined)
    return <Loading />
  if(data===null)
    return <Error />

  return (
    <View style={styles.back}>
      <HeaderLine navigation={props.navigation} title={'Actor'}/>
      <ScrollView>
      <View style={styles.upperBox}>
        <Image style={styles.img} source={{uri: data.image=="https://imdb-api.com/images/original/nopicture.jpg"?props.route.params.Title.image:data.image}}/>
        <View style={{flex:1, justifyContent:'center'}}>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.ratingStr}>{data.role}</Text>
          <Text style={styles.ratingStr}>Date of birth: {data.birthDate}</Text>
          {
            data.deathDate
            ?
            <Text style={styles.ratingStr}>Date of death: {data.birthDate}</Text>
            :
            <></>
          }
          <Text style={styles.ratingStr}>Height: {data.height}</Text>
        </View>
      </View>
      <Text style={styles.plot}>{data.summary}</Text>
      <Text style={styles.subTitle}>Known for:</Text>
      <FlatList
        data={data.knownFor}
        horizontal={true}
        renderItem={
          ({ item }) =>
            (<SmallResult data={item} onPress={props.navigation.push}/>)}
        keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  back : {
    backgroundColor : '#262625',
    height:'100%'
  },
  subTitle: {
      color: '#d4f1f4',
      fontSize: 25,
      margin: 20
  },
  upperBox : {
    flexDirection : 'row'
  },
  img : {
    height: 300,
    width: 180,
    margin: 15,
  },
  title : {
    color: '#d4f1f4',
    fontWeight: 'bold',
    margin: 5,
    marginTop:30,
    textAlign: 'center',
    fontSize: 30
  },
  rating : {
    color: '#d4f1f4',
    margin: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  ratingStr : {
    color: '#d4f1f4',
    margin: 10,
    fontSize: 15,
    textAlign: 'center',
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
    fontSize: 15,
    padding: 15,
    margin: 10
  },
  marginBox : {
    marginBottom : 69
  }
})

export default ActorScreen;

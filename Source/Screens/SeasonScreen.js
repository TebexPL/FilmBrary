import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, FlatList} from 'react-native';

import HeaderLine from './Components/HeaderLine';
import ActorBox from './Components/ActorBox';
import EpisodeBox from './Components/EpisodeBox';
import SmallResult from './Components/SmallResult';
import Loading from './Components/Loading';
import Error from './Components/Loading';
import {FetchData} from './Common/Common.js';

const SeasonScreen = (props) =>{
  const [data, setData] = useState(null)
  useEffect(() => {fetchData()}, []);

  const fetchData = async () =>{
    const result = await FetchData('SeasonEpisodes', '/'+props.route.params.Title.id+'/'+props.route.params.Season);
    result===null?setData(null):setData(result);
  }

  if(data===undefined)
    return <Loading />
  if(data===null)
    return <Error setData={setData} fetchData={fetchData}/>
  return (
    <View style={styles.back}>
      <HeaderLine navigation={props.navigation} title={'Season '+props.route.params.Season}/>
      <FlatList
        data={data.episodes}
        renderItem={
          ({ item }) =>
            (<EpisodeBox data={item} onPress={props.navigation.push}/>)}
        keyExtractor={item => item.id}
        />
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

export default SeasonScreen;

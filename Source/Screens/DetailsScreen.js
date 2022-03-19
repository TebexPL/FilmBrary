import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity} from 'react-native';

import HeaderLine from './Components/HeaderLine';
import ActorBox from './Components/ActorBox';
import SeasonsBox from './Components/SeasonsBox';
import SmallResult from './Components/SmallResult';
import Loading from './Components/Loading';
import Error from './Components/Error';
import {FetchData} from './Common/Common.js';

const DetailsScreen = (props) =>{
  const [data, setData] = useState(undefined)
  useEffect(()=>{fetchData()}, []);

  const fetchData = async () =>{
    const result = await FetchData('Title', '/'+props.route.params.Title.id);
    if(result===null)
      setData(null)
    else{
      if(result.imDbRating != null){
        result.ratingStars='';
        for(let i=0; i<Math.round(result.imDbRating/2.0); i++)
          result.ratingStars+='★';
        while(result.ratingStars.length<5)
          result.ratingStars+='☆';
      }
      setData(result);
    }
  }


  if(data===undefined)
    return <Loading />
  if(data===null)
    return <Error setData={setData} fetchData={fetchData}/>
  return (

    <View style={styles.back}>
    <HeaderLine navigation={props.navigation} title={'Details'}/>
      <ScrollView >
        <View style={styles.upperBox}>
          <Image style={styles.img} source={{uri: data.image=="https://imdb-api.com/images/original/nopicture.jpg"?props.route.params.Title.image:data.image}}/>
          <View style={{flex:1, justifyContent:'center'}}>
            <Text style={styles.title}>{data.fullTitle}</Text>
            {data.imDbRating!=null
              ?
                <>
                  <Text style={styles.rating}>{data.ratingStars}</Text>
                  <Text style={styles.ratingStr}>({data.imDbRating}/10, {data.imDbRatingVotes} votes)</Text>
                </>

              :
              <></>
            }
          </View>
        </View>
        <Text style={styles.plot}>{data.plot}</Text>
        <Text style={styles.subTitle}>Cast:</Text>
        <FlatList
          data={data.actorList}
          horizontal={true}
          renderItem={
            ({ item }) =>
              (<ActorBox data={item} onPress={props.navigation.push}/>)}
          keyExtractor={item => item.id}
          />
        {data.tvEpisodeInfo?
          <></>
          :
          <>
          <Text style={styles.subTitle}>See also:</Text>
          <FlatList
            data={data.similars}
            horizontal={true}
            renderItem={
              ({ item }) =>
                (<SmallResult data={item} onPress={props.navigation.push}/>)}
            keyExtractor={item => item.id}
            />
            </>

        }

        {
          data.tvSeriesInfo!=null
          ?
          <>
          <Text style={styles.subTitle}>Seasons:</Text>
          <FlatList
            data={data.tvSeriesInfo.seasons}
            horizontal={true}
            renderItem={
              ({ item }) =>
                (<SeasonsBox title={data} data={item} onPress={props.navigation.navigate} />)}
            keyExtractor={item => item}
            />
            </>
            :
            <></>
          }
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

export default DetailsScreen;

import React from 'react';
import {useState, useEffect} from 'react';
import {View,Text, FlatList, StyleSheet, ScrollView} from 'react-native';

import SearchBox from './Components/SearchBox'
import SmallResult from './Components/SmallResult';
import HeaderLine from './Components/HeaderLine';
import Loading from './Components/Loading';
import Error from './Components/Error';

import {FetchData} from './Common/Common.js';


const SearchScreen = (props) =>{
  const [data, setData] = useState(undefined);
  useEffect(()=>{fetchData()}, []);


  const fetchData = async () =>{
    const temp=[];
    const resultMovies = await FetchData('MostPopularMovies');
    const resultTVs = await FetchData('MostPopularTVs');
    const resultComing = await FetchData('ComingSoon');
    const resultTheaters = await FetchData('InTheaters');
    const resultBoxOffice = await FetchData('BoxOffice');
    if( resultMovies===null||
        resultTVs===null||
        resultComing===null||
        resultTheaters===null||
        resultBoxOffice===null){
          setData(null);
          return;
    }

    temp.push({title: "Popular Movies", data: resultMovies.items});
    temp.push({title: "Popular TV shows", data: resultTVs.items});
    temp.push({title: "Coming soon", data: resultComing.items});
    temp.push({title: "In theaters", data: resultTheaters.items});
    temp.push({title: "Box Office", data: resultBoxOffice.items});
    setData(temp);
  }

  if(data===undefined)
    return <Loading />
  if(data===null)
    return <Error />

  return (
    <>
    <HeaderLine navigation={props.navigation} title={'Home'}/>
    <FlatList
      style={styles.back}
      data={data}
      renderItem={
        ({ item }) =>
          (<>
            <Text style={styles.title}>{item.title}</Text>
            <FlatList
              style={styles.back}
              data={item.data}
              horizontal={true}
              renderItem={
                ({ item }) =>
                  (<SmallResult data={item} onPress={props.navigation.navigate}/>)}
              keyExtractor={item => item.id}
              />
              </>
          )}
      keyExtractor={item => item.title}
      />
      <View style={[{paddingBottom: 50}, styles.back]}></View>
    </>

  )
}

const styles = StyleSheet.create({
  title:{
      padding:10,
      fontSize: 20,
      fontWeight: 'bold',
      backgroundColor : '#262625',
      color: '#d4f1f4',
  },
  back: {
    backgroundColor : '#262625'
  }
})

export default SearchScreen;

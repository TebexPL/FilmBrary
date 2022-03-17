import React from 'react';
import {useState, useEffect} from 'react';
import {View,Text, FlatList, StyleSheet, ScrollView} from 'react-native';

import SearchBox from './Components/SearchBox'
import SmallResult from './Components/SmallResult';
import HeaderLine from './Components/HeaderLine';
import ApiKey from './ApiKey';


const SearchScreen = (props) =>{
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
      try{
        const temp=[];
        const resultMovies = await (await fetch('https://imdb-api.com/en/API/MostPopularMovies/'+ApiKey)).json();
        const resultTVs = await (await fetch('https://imdb-api.com/en/API/MostPopularTVs/'+ApiKey)).json();
        const resultComing = await (await fetch('https://imdb-api.com/en/API/ComingSoon/'+ApiKey)).json();
        const resultTheaters = await (await fetch('https://imdb-api.com/en/API/InTheaters/'+ApiKey)).json();
        const resultBoxOffice = await (await fetch('https://imdb-api.com/en/API/BoxOffice/'+ApiKey)).json();
        temp.push({title: "Popular Movies", data: resultMovies.items});
        temp.push({title: "Popular TV shows", data: resultTVs.items});
        temp.push({title: "Coming soon", data: resultComing.items});
        temp.push({title: "In theaters", data: resultTheaters.items});
        temp.push({title: "Box Office", data: resultBoxOffice.items});
        setResults(temp);
      }
      catch(error){
        console.error(error);
      }
  }

  const gotoDetails = (title) => {
    props.navigation.navigate('DetailsScreen', {Title: title});
  }

  return (
    <>
    <HeaderLine navigation={props.navigation} title={'Home'}/>
    <FlatList
      style={styles.back}
      data={results}
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
                  (<SmallResult data={item} onPress={gotoDetails}/>)}
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

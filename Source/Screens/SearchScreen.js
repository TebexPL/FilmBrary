import React from 'react';
import {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import SearchBox from './Components/SearchBox'
import SingleResult from './Components/SingleResult';
import HeaderLine from './Components/HeaderLine';


const SearchScreen = (props) =>{
  const [results, setResults] = useState([]);

  const fetchResults = async (event) => {
    const queryString = event.nativeEvent.text;
    try{
      const result = await (await fetch('https://imdb-api.com/en/API/SearchTitle/k_m73z3hkh/'+queryString)).json();
      setResults(result.results);
    }
    catch(error){
      console.error(error);
    }
  }

  const gotoDetails = (titleID) => {
    props.navigation.navigate('DetailsScreen', {TitleID: titleID});
  }

  return (
    <>
    <HeaderLine onPress={() => {props.navigation.goBack()}}/>
    <FlatList
      style={styles.back}
      ListHeaderComponent=
        {<SearchBox placeholder="Type here..." onSubmit={fetchResults}/>}
      data={results}
      renderItem={
        ({ item }) =>
          (<SingleResult data={item} onPress={gotoDetails}/>)}
      keyExtractor={item => item.id}
    />
    </>

  )
}

const styles = StyleSheet.create({
  back: {
    backgroundColor : '#262625'
  }
})

export default SearchScreen;

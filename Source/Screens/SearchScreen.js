import React from 'react';
import {useState} from 'react';
import {FlatList} from 'react-native';

import SearchBox from './Components/SearchBox'
import SingleResult from './Components/SingleResult'


const SearchScreen = () =>{
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

  const showDetails = (args) => {
    console.log(args);
  }

  return (

    <FlatList
      ListHeaderComponent=
        {<SearchBox placeholder="Type here..." onSubmit={fetchResults}/>}
      data={results}
      renderItem={
        ({ item }) =>
          (<SingleResult data={item} onPress={showDetails}/>)}
      keyExtractor={item => item.id}
    />




  )


}

export default SearchScreen;

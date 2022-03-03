import React from 'react';
import {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import SingleResult from './Components/SingleResult'


const CategoryScreen = (props) =>{
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const queryString = props.route.params.QueryStr;
      try{
        const result = await (await fetch('https://imdb-api.com/en/API/AdvancedSearch/k_m73z3hkh?genres='+queryString)).json();
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

    <FlatList
      /*ListHeaderComponent=
        {<SearchBox placeholder="Type here..." onSubmit={fetchResults}/>}*/
      data={results}
      renderItem={
        ({ item }) =>
          (<SingleResult data={item} onPress={gotoDetails}/>)}
      keyExtractor={item => item.id}
    />




  )


}

export default CategoryScreen;

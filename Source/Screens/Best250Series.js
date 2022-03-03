import React from 'react';
import {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import SingleResult from './Components/SingleResult'


const Best250Series = (props) =>{
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
      try{
        const result = await (await fetch('https://imdb-api.com/en/API/Top250TVs/k_m73z3hkh')).json();
        setResults(result.items);
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

export default Best250Series;

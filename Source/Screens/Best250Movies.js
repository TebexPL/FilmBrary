import React from 'react';
import {useState, useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import SingleResult from './Components/SingleResult';
import HeaderLine from './Components/HeaderLine';


const Best250Movies = (props) =>{
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
      try{
        const result = await (await fetch('https://imdb-api.com/en/API/Top250Movies/k_m73z3hkh')).json();
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
    <>
      <HeaderLine onPress={() => {props.navigation.goBack()}}/>
      <FlatList
        style={styles.back}
        /*ListHeaderComponent=
          {<SearchBox placeholder="Type here..." onSubmit={fetchResults}/>}*/
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

export default Best250Movies;

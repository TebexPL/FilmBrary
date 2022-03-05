import React from 'react';
import {useState, useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import SingleResult from './Components/SingleResult';
import HeaderLine from './Components/HeaderLine';


const CategoryScreen = (props) =>{
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const category = props.route.params.Category;
      try{
        const result = await (await fetch('https://imdb-api.com/en/API/AdvancedSearch/k_m73z3hkh?genres='+category.queryStr)).json();
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
    <View style={styles.container}>
      <HeaderLine navigation={props.navigation} title={props.route.params.Category.name}/>
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
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#262625'
  },

})

export default CategoryScreen;

import React from 'react';
import {useState, useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import SingleResult from './Components/SingleResult';
import HeaderLine from './Components/HeaderLine';
import Loading from './Components/Loading';
import Error from './Components/Error';
import {FetchData} from './Common/Common.js';


const CategoryScreen = (props) =>{
  const [data, setData] = useState(undefined);
  useEffect(()=>{fetchData()}, []);

  const fetchData = async () =>{
    const result = await FetchData('AdvancedSearch', '?genres='+props.route.params.Category.queryStr);
    result===null?setData(null):setData(result.results);
  }


  if(data===undefined)
    return <Loading />
  if(data===null)
      return <Error />
  return (
    <View style={styles.container}>
      <HeaderLine navigation={props.navigation} title={props.route.params.Category.name}/>
      <FlatList
        style={styles.back}
        data={data}
        renderItem={
          ({ item }) =>
            (<SingleResult data={item} onPress={props.navigation.push}/>)}
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

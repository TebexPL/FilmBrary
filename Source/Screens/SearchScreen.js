import React from 'react';
import {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import SearchBox from './Components/SearchBox'
import SingleResult from './Components/SingleResult';
import HeaderLine from './Components/HeaderLine';
import {FetchData} from './Common/Common.js';


const SearchScreen = (props) =>{
  const [data, setData] = useState([]);

  const fetchData = async () =>{
    const result = await FetchData('SearchTitle', '/'+event.nativeEvent.text);
    result===null?setData(null):setData(result.results);
  }


  return (
    <>
    <HeaderLine navigation={props.navigation} title={'Search'}/>
    <FlatList
      style={styles.back}
      ListHeaderComponent=
        {<SearchBox placeholder="Type here..." onSubmit={fetchData}/>}
      data={data}
      renderItem={
        ({ item }) =>
          (<SingleResult data={item} onPress={props.navigation.navigate}/>)}
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

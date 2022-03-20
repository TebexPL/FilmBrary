import React from 'react';
import {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Loading from './Components/Loading';

import SearchBox from './Components/SearchBox'
import SingleResult from './Components/SingleResult';
import HeaderLine from './Components/HeaderLine';
import {FetchData} from './Common/Common.js';


const SearchScreen = (props) =>{
  const [data, setData] = useState(null);

  const fetchData = async (event) =>{
    setData(undefined);
    const result = await FetchData('SearchTitle', '/'+event.nativeEvent.text);
    result===null?setData(null):setData(result.results);
  }


  return (
    <View style={styles.back}>
    <HeaderLine navigation={props.navigation} title={'Search'}/>
    <SearchBox placeholder="Type here..." onSubmit={fetchData}/>
    {data===undefined
      ?
      <Loading />
      :
      <FlatList
        style={styles.back}
        data={data}
        renderItem={
          ({ item }) =>
            (<SingleResult data={item} onPress={props.navigation.navigate}/>)}
        keyExtractor={item => item.id}
      />
    }

    </View>

  )
}

const styles = StyleSheet.create({
  back: {
    flex:1,
    backgroundColor : '#262625'
  }
})

export default SearchScreen;

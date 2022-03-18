import React from 'react';
import {useState, useEffect} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';

import SingleResult from './Components/SingleResult';
import HeaderLine from './Components/HeaderLine';
import Loading from './Components/Loading';
import Error from './Components/Error';
import {FetchData} from './Common/Common.js';

const Best250Movies = (props) =>{
  const [data, setData] = useState(undefined);
  useEffect(()=>{fetchData()}, []);

  const fetchData = async () =>{
    const result = await FetchData('Top250Movies');
    result===null?setData(null):setData(result.items);
  }

  if(data===undefined)
    return <Loading />
  else if(data===null)
    return <Error />

  return (
    <>
      <HeaderLine navigation={props.navigation} title={'Best Movies'}/>
      <View style={styles.back}>
        <FlatList
          style={styles.back}
          data={data}
          renderItem={
            ({ item }) =>
              (<SingleResult data={item} onPress={props.navigation.push}/>)}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  back: {
    backgroundColor : '#262625'
  }
})

export default Best250Movies;

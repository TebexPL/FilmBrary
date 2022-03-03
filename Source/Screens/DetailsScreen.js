import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text} from 'react-native';



const DetailsScreen = (props) =>{
  const [data, setData] = useState({})

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
      const queryString = props.route.params.TitleID;
      try{
        const result = await (await fetch('https://imdb-api.com/en/API/Title/k_m73z3hkh/'+queryString)).json();
        setData(result);
      }
      catch(error){
        console.error(error);
      }
  }

    return (

    <View>
      <Text>{data.fullTitle}</Text>
      <Text>Rating: {data.imDbRating}</Text>
      <Text>Keywords: {data.keywords}</Text>
    </View>




  )


}

export default DetailsScreen;

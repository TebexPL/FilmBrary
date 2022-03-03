import React from 'react';
import {useState} from 'react';

import {TextInput, View} from 'react-native';


const SearchBox = (props) =>{
  const [searchString, setSearchString] = useState('');

  return (

    <View>
      <TextInput placeholder={props.placeholder} value={searchString} onChangeText={setSearchString} onSubmitEditing={props.onSubmit}/>
    </View>
  )


}

export default SearchBox;

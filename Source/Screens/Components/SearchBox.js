import React from 'react';
import {useState} from 'react';

import {TextInput, View} from 'react-native';





const SearchBox = (props) =>{
  const [searchString, setSearchString] = useState('');
  const searchPlaceholder = props.placeholder;


  return (

    <View>
      <TextInput placeholder={searchPlaceholder} value={searchString} onChangeText={setSearchString} onSubmitEditing={props.onSubmit}/>
    </View>
  )


}

export default SearchBox;

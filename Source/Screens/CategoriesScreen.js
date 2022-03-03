import React from 'react';
import {FlatList} from 'react-native';

import CategoryItem from './Components/CategoryItem'

const categories =[
  {name:'Action', queryStr: 'action'},
  {name:'Adventure', queryStr: 'adventure'},
  {name:'Animation', queryStr: 'animation'},
  {name:'Biography', queryStr: 'biography'},
  {name:'Comedy', queryStr: 'comedy'},
  {name:'Crime', queryStr: 'crime'},
  {name:'Documentary', queryStr: 'documentary'},
  {name:'Drama', queryStr: 'drama'},
  {name:'Family', queryStr: 'family'},
  {name:'Fantasy', queryStr: 'fantasy'},
  {name:'Film Noir', queryStr: 'film_noir'},
  {name:'Game Show', queryStr: 'game_show'},
  {name:'History', queryStr: 'history'},
  {name:'Horror', queryStr: 'horror'},
  {name:'Music', queryStr: 'music'},
  {name:'Musical', queryStr: 'musical'},
  {name:'Mystery', queryStr: 'mystery'},
  {name:'News', queryStr: 'news'},
  {name:'Reality TV', queryStr: 'reality_tv'},
  {name:'Romance', queryStr: 'romance'},
  {name:'Sci-Fi', queryStr: 'sci_fi'},
  {name:'Sport', queryStr: 'sport'},
  {name:'Talk Show', queryStr: 'talk_show'},
  {name:'Thriller', queryStr: 'thriller'},
  {name:'War', queryStr: 'war'},
  {name:'Western', queryStr: 'western'},
]

const CategoriesScreen = (props) =>{

  const gotoCategory = (queryStr) => {
    props.navigation.navigate('CategoryScreen', {QueryStr: queryStr});
  }

  return (

    <FlatList
      /*ListHeaderComponent=
        {<SearchBox placeholder="Type here..." onSubmit={fetchResults}/>}*/
      data={categories}
      renderItem={
        ({ item }) =>
          (<CategoryItem data={item} onPress={gotoCategory}/>)}
      keyExtractor={item => item.queryStr}
    />




  )


}

export default CategoriesScreen;
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const dramaImg = {'Drama':require('./assets/drama.png')};

const Error = (props) =>{

  const refresh = async () => {
    props.setData(undefined);
    props.fetchData();    
  };

  return (
    <View style={styles.back}>
      <Image style={styles.img} source={dramaImg['Drama']}/>
      <Text style={styles.msg}>Something went wrong while trying to fetch data. Please try again.</Text>
      <View style={styles.btn}>
        <TouchableOpacity style={styles.confirmBtn} onPress={refresh}>
          <Text style={styles.btnText}>Refresh</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  back : {
    backgroundColor : '#262625',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img:{
    height: 200,
    width: 200,
    marginBottom:20
  },
  msg : {
    color: '#d4f1f4',
    margin:10,
    padding:10,
    paddingBottom: 30,
    textAlign: 'center',
    fontSize: 16
  },
  btn:{
    backgroundColor: '#d4f1f4',
    margin:10,
    borderRadius: 25
  },
  confirmBtn:{
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: 100
  },
  btnText: {
    color: '#262625',
    fontWeight: 'bold',
    fontSize: 16
  }
})

export default Error;

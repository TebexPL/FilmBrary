import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomeScreen = (props) =>{
  const [firstTime, setFirstTime] = useState(undefined);

  useEffect(() =>  {
      fetchData();
  }, [firstTime]);

  const fetchData = async () => {
    try{
      const value = await AsyncStorage.getItem('@FirstTime');
      if (value === "false") {


        //Uncomment this
        //props.navigation.replace('MainScreen', {});

        //Remove this
        setFirstTime(true);
      }
      else
          setFirstTime(true);
    }
    catch(error){
      setFirstTime(true);
    }
  }

  const confirm = async () => {
    try{
      await AsyncStorage.setItem('@FirstTime', "false");
      props.navigation.replace('MainScreen', {});

    }
    catch(error){
      console.log(error);
    }
  }


  if(firstTime===undefined)
    return (<View style={styles.back}></View>)

  return (
    <View style={styles.back}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Welcome</Text>
      </View>

      <View style={styles.title}>
        <Text style={styles.description}>Example welcome text</Text>
      </View>
      <View style={styles.title}>
        <TouchableOpacity style={styles.confirmButton} onPress={confirm}>
          <Text style={styles.buttonText}>Let's go!</Text>
        </TouchableOpacity>
      </View>

    </View>

  )
}

const styles = StyleSheet.create({
  back: {
    flex: 1,
    backgroundColor : '#262625',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description:{
    color: '#d4f1f4',
  },
  title:{
      flex:1,
      justifyContent: 'center',
      alignItems:'center',
  },
  titleText:{
      color: '#d4f1f4',
      fontSize: 40,
  },
  confirmButton:{
      width: 150,
      height: 75,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#3e3b39',
      color: '#d4f1f4',
  },
  buttonText:{
    color: '#d4f1f4',
    fontSize:25
  }
})

export default WelcomeScreen;

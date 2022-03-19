import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen'
const WelcomeScreen = (props) =>{
  const [firstTime, setFirstTime] = useState(undefined);

  useEffect(() =>  {
      fetchData();
  }, [firstTime]);

  const fetchData = async () => {
    try{
      const value = await AsyncStorage.getItem('@FirstTime');
      if (value === "false") {
        props.navigation.replace('MainScreen', {});
      }
      else
          setFirstTime(true);
    }
    catch(error){
      setFirstTime(true);
    }
    finally{
      SplashScreen.hide();
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
        <Text style={styles.description}>By clicking the button below you agree to Terms Of Service and IMDB API policy</Text>
      </View>
      <View style={styles.title}>
        <TouchableOpacity style={styles.confirmButton} onPress={confirm}>
          <Text style={styles.buttonText}>Let's move it!</Text>
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
    textAlign: 'justify',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
    padding:10
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
      width: 250,
      height: 75,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#d4f1f4',
      color: '#d4f1f4',
      borderRadius: 20
  },
  buttonText:{
    color: '#262625',
    fontSize:25,
    fontWeight: 'bold'
  }
})

export default WelcomeScreen;

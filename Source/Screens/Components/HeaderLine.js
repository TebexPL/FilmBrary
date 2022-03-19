import React from "react";
import {Dimensions, Image, View, TouchableOpacity, StyleSheet, Text} from 'react-native';

const headerHeight = Dimensions.get('window').height/10.0;

const HeaderLine = (props) => {
    return (
        <View style={styles.arrowBox}>
            <TouchableOpacity disabled={props.navigation.canGoBack()?false:true} style={styles.button} onPress={props.navigation.goBack}>
                <Image style={[styles.arrow, {display: props.navigation.canGoBack()?'flex':'none'}]} source={require('./assets/arrow.png')}/>
            </TouchableOpacity>
            <View style={styles.line}></View>
            <Text style={styles.screenName}>{props.title}</Text>
            <View style={styles.line}></View>

        </View>
    )
}

const styles = StyleSheet.create({
    arrowBox :{
        paddingRight: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#262625'
      },
      button:{
        height: 20,
        width: 20,
        margin : 15,
      },
      screenName: {
        flex:3,
        textAlign: 'center',
        color: '#d4f1f4',
        fontSize: 22
      },
      arrow :{
        height: 20,
        width: 20,
        tintColor: '#d4f1f4'
      },
      line :{
        borderColor: '#d4f1f4',
        borderWidth: 2.5,
        borderRadius:20,
        flex: 1,
        paddingLeft: 15
      },
})

export default HeaderLine;

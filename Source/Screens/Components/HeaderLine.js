import React from "react";
import {Image, View, TouchableOpacity, StyleSheet} from 'react-native';

const HeaderLine = (props) => {

    return (
        <View style={styles.arrowBox}>
            <TouchableOpacity onPress={props.onPress}>
                <Image style={styles.arrow} source ={{uri : 'https://cdn-icons-png.flaticon.com/512/507/507257.png'}}/>
            </TouchableOpacity>
            <View style={styles.line}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    arrowBox :{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#262625'
      },
      arrow :{
        height: 40,
        width: 40,
        margin : 15,
        tintColor: '#d4f1f4'
      },
      line :{
        borderColor: '#d4f1f4',
        borderWidth: 2.5,
        borderRadius:20,
        width: 270,
        paddingLeft: 15
      },
})

export default HeaderLine;
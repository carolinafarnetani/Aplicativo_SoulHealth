import React,{useState, Component} from 'react';
import {View, Text, TextInput, StyleSheet, Image, Dimensions} from 'react-native';


export default function Header(){

    return(
    
        

    <View style={styles.cabecalho}>
        {/* <ImageBackground source={ require('../../assets/principal.png')}> */}
            <Text style={styles.titulo}>SoulHealth</Text>
            

            <Image style={{width:Dimensions.get('screen').width, height:Dimensions.get('screen').width/3}} source={ require('../../assets/principal.png')}/>
        {/* </ImageBackground> */}
    </View>
    
    )
    }
    
    const styles = StyleSheet.create({
        titulo: {
            fontSize: 50,
            textAlign: 'center',
            color: 'black',
            fontFamily: 'sans-serif-medium',
            paddingTop: 20,
            paddingBottom:20,
         },

    });
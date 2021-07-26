import React,{useState, Component} from 'react';
import {View, Text, TextInput, StyleSheet, Button, Touchable, TouchableOpacity, Image} from 'react-native';

export default function Informacao(props){

    return(
    
        <View>
                    
            <Text style={styles.letraA}>{props.titulo}</Text>
            <Text style={styles.letraC}>{props.autor}</Text>
            <Text style={styles.letraB}>{props.conteudo}</Text>

        </View>
    
    )
    }

    const styles = StyleSheet.create({

        letraA:{
            
            fontSize: 30,
            fontFamily: 'sans-serif-thin',
            textAlign:'center',
            padding: 20,
            
        },
    
        letraB:{
            
            fontSize:21,
            fontFamily: 'sans-serif-light',
            paddingTop: 10,
            paddingBottom: 10,
        },
    
        letraC:{
            
            fontSize:18,
            fontFamily: 'sans-serif-medium',
            paddingTop: 10,
            paddingBottom: 10,
        },
    })    
    
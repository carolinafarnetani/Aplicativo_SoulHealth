import React,{useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';


export default function IMC(){

    const[state, setState] = useState({
        peso: 0,
        altura: 0,
        result: '',
        titulo: '',
        descricao: '',
        
    })

console.log(state)

    const handleInputChange = (name, value) =>{
        setState({
            ...state,[name]:value
        })
    }

    const CalculoIMC = () => {
        const recebe= Number((state.peso / (state.altura * state.altura))).toFixed(1);
        
        if(recebe>=17 && recebe<=18.4){
            setState({
                ...state,result:recebe,titulo:'Abaixo do peso',descricao: 'Fadiga, stress, ansiedade'
            });
        }

        else if(recebe>=18.5 && recebe<=24.9){
            setState({
                ...state,result:recebe,titulo:'Peso normal',descricao: 'Menor risco de doenças cardíacas e vasculares'
            });
        }
        else if(recebe>=25 && recebe<=29.9){
            setState({
                ...state,result:recebe,titulo:'Acima do peso',descricao: 'Fadiga, má circulação, varizes'
            });
        }
    }

    return(

    <View style={styles.corpo}>
        <Text style={styles.letraA}>Cálculo do IMC</Text>
    <TextInput style={styles.campo}
            onChangeText={
            (valor) => handleInputChange("peso", Number(valor))
            }
            KeyboardType="numeric" placeholder="Digite seu peso"
            />

    <TextInput style={styles.campo}
            onChangeText={
            (valor) => handleInputChange("altura", Number(valor))
            }
            KeyboardType="numeric" placeholder="Digite sua altura"
            />

    <TouchableOpacity>
            <Text  style={styles.botao} onPress={CalculoIMC}>Calcular</Text>
    </TouchableOpacity>

    <Text style={styles.texto}>
        {state.result}
    </Text>
    <Text style={styles.texto}>
        {state.titulo}
    </Text>
    <Text style={styles.texto}>
        {state.descricao}
    </Text>
    
    <Image style={{width:360, height: 240,}} source={ require('../../assets/laranja.jpg')}/>
    </View>    
    
    
    )}


 
    const styles = StyleSheet.create({
        corpo: {
           backgroundColor: '#FECA36',
           padding: 50,
           textAlign: 'center',
           alignItems: 'center',
        },

        campo: {
            fontSize: 18,
            width:200,
            margin: 5,
            backgroundColor: 'white',
            borderRadius:50,
            padding:10,
            textAlign: 'center',
            fontFamily: 'sans-serif-light',
            color: '#92BBCF',
            fontWeight: 'bold',
            
       },

        botao: {
            fontSize: 22,
            width:140,
            height:140,
            borderRadius: 100,
            marginTop: 5,
            backgroundColor: '#F4BBCF',
            fontFamily: 'sans-serif-medium',
            textAlign: 'center',
            textAlignVertical: 'center',
        },

        letraA:{
            fontSize: 30,
            fontFamily: 'sans-serif-thin',
            textAlign:'center',
            padding: 20,
        },

        texto:{
            textAlign: 'center',
            marginTop: 10,
            fontFamily: 'sans-serif-light',
            fontSize: 18,
        }
            
    })
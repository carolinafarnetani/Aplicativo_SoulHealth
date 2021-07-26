import React,{useState, Component} from 'react';
import {View, Text, TextInput, StyleSheet, Button, Touchable, TouchableOpacity, Image, ScrollView, Dimensions} from 'react-native';
import Informacao from './Informacao';
import IMC from './IMC';

export default function Content(){
return(

<ScrollView>
    <View style={styles.caixa}>

        <View style={styles.inicio}>
            <Informacao titulo={`Bem-vindos ao \naplicativo: SoulHealth`}/>
        </View>

        <View style={styles.curiosidades}>
            <Informacao titulo='Viva melhor' autor='Para ter uma vida saudavél:' conteudo={`1) Beba água. 
            \n2) Tenha uma alimentação saudável. 
            \n3) Cuide bem das horas de sono. 
            \n4) Pratique exercícios físicos.
            \n5) Faça exames preventivos regularmente. 
            \n6) O MAIS IMPORTANTE: "não surte com os desafios da Leide e do Filipe!"`}/>
                
            <Image style={{width:Dimensions.get('screen').width, height:Dimensions.get('screen').width/2, marginTop: 20}} source={ require('../../assets/inicio.jpg')}/>
        </View>

        
        <View style={styles.titulo}>
            <Informacao style={styles.tituloA} titulo='Alimentação sem carne' autor='Dr Eric Slywitch' conteudo='“Quando alguém modifica seus hábitos alimentares, não significa que essa pessoa simplesmente mudou o que come, mas sim que a sua forma de se relacionar com o mundo foi transformada.”'/>
        </View>


        <View style={styles.titulo}>
            <Informacao titulo='Ayurveda' autor='Adriane Fetter' conteudo='"Uma comunidade que incentiva você a alcançar os seus objetivos e recuperar sua saúde e seu bem estar, utilizando como base um conhecimento milenar: a Ayurveda."'/>
        </View>

        <View style={styles.titulo}>
            <Informacao titulo='Culinária Saudável' autor='Pati Bianco' conteudo='"Culinária saudável possível para pessoas reais."'/>
            <Image style={{width:360, height: 240,}} source={ require('../../assets/fruta.jpg')}/>
        </View>    


        <View>
            <IMC style={styles.imcF}/>
        </View>

        <View style={styles.dicas}>
            <Informacao titulo='Dicas de atividades físicas' autor='Exercícios na escada:' conteudo='Faça 3 séries de subidas e descidas.  Dependendo da quantidade de degraus, faça de 10 a 15 repetições.'/>
            
            <Informacao autor='Prancha:' conteudo='Apoie os cotovelos e antebraço no chão, seguindo a linha dos ombros.  Além disso, a ponta dos pés devem estar apoiadas no chão.'/>
        
            <Image style={{width:360, height: 240,}} source={ require('../../assets/fita.jpg')}/>
        </View>  

        <View>
            <Text style={styles.footer}>Carolina Farnetani de Almeida</Text>
        </View>  

    </View>
</ScrollView>
)
}



const styles = StyleSheet.create({
    
//  VIEW GERAL---------------------

    caixa: {
        
        width: Dimensions.get('window').width,
        
    },

// BEM-VINDOSSSSS--------------------

    inicio: {
            
        fontSize: 25,
        textAlign: 'center',
        marginTop: 30,
        
    },

// DICAS----------------------------

    curiosidades: {
        backgroundColor: '#C1DABD',
        padding: 10,
    },
    
// AUTORES-------------------------

    titulo:{
        backgroundColor: '#F4BBCF',
        padding: 10,
    },

// IMC-----------------------------

    imcF:{
        backgroundColor: '#FECE4E',
        padding: 10,
    },

// EXERCICIOS FISICOS--------------

    dicas: {
        backgroundColor: '#92BBCF',
        padding: 10,
    },
 
// FOOTER--------------------------

    footer:{
        backgroundColor: 'white', 
        padding: 10,
        fontFamily: 'sans-serif-thin',
        textAlign:'center',
        fontSize: 18,
    }
})









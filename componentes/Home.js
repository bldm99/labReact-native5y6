
import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import React, { useState } from 'react';

const Home = () => {
    return (
        <View style={styles.container}>

            
            <View style={styles.contacto}>
                <Text style={{fontSize:30 , textAlign: 'center' , color:'white' , backgroundColor: 'black' , width: '100%'}}>
                    Estreno
                </Text>
                <Image source={{ uri: "https://fondosmil.com/fondo/41073.png" }} style={styles.imagenportada} />
                
            </View>



            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width: "100%",
        marginTop: "16%"
    },
    banner: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    titulo: {
        fontSize: 50,
        color: "black",

    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 80,

    },
    imagenportada: {
        height: 500,
        width: '100%',


    },
    contacto: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        marginTop: -215,
        gap: 10
    },
    contenido: {
        paddingRight: 10,
        paddingLeft: 10,
    },
    input:{
        fontSize:25,
        padding:5
    }


})




export default Home
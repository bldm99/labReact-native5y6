
import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';
import { StyleSheet, Text, View, Button, TextInput , Image } from 'react-native';
import React, { useState } from 'react';
import * as Datos from '../Datos'

const Productos = () => {

    /*{products.map((xequipo, index) =>

        <View style={styles.caja1}>
          <Image key={index} source={{ uri: xequipo.imagen }
          } style={styles.image} />
        </View>
    )}*/

    const productos = Datos.catalogo

    console.log(productos)

    return (
        <View style={styles.container}>

            <Text style={styles.titu}>Series</Text>
            
            <StatusBar style='auto' />
            <View style={styles.con}>

                {productos.map((x, index) =>

                    <View key={index} >
                        <Text style={styles.nombre} >{x.titulo}</Text>
                        <Image  source={{ uri: x.imagen }}   style={styles.image} />
                    </View>

                )}



            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titu :{
        backgroundColor:"black",
        color:"white",
        fontSize: 35,
        padding:10,
        width:'100%',
        textAlign:"center"


    },
    con : {
        backgroundColor:"orange",
        width:'100%',
        height:'100%',
        flex:2,
        justifyContent:"space-around",
        flexDirection:"row",
        flexWrap:"wrap",
        gap:40,
        paddingTop:12,
    },
    image: {
        height: 220,
        width: 220,
      
    },

    nombre:{
        backgroundColor:"white",
        fontSize: 20,
        padding:2,
        width:'100%',
        textAlign:"center"

    }
})


export default Productos


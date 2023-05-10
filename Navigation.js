
import react  from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';

import HomScreen from "./Screens/HomScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import StackScreen from "./Screens/StackScreen";
import Productos from "./componentes/Productos";
import { useState } from "react";

const Tab = createBottomTabNavigator()
const HomeStackNavigator = createNativeStackNavigator()


const MyStack = () => {
    return (
        <HomeStackNavigator.Navigator initialRouteName="HomeScreen" >
            <HomeStackNavigator.Screen name="HomeScreen" component={HomScreen} />
            <HomeStackNavigator.Screen name="Stack" component={StackScreen} />
            <HomeStackNavigator.Screen name="Productos" component={Productos} />
        </HomeStackNavigator.Navigator>
    );
}


const MyTabs = () => {

    

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomScreen}
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                    tabBarBadge: 3,
                    headerShown: false

                }}
            />

             <Tab.Screen
                name="Productos"
                component={Productos}
                options={{
                    tabBarLabel: 'Series',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="shopping-cart" size={24} color="black" />
                    
                    ),


                }}
            />


            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Ajustes',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="brightness-5" color={color} size={size} />
                    ),


                }}
            />
            <Tab.Screen
                name="Stack"
                component={StackScreen}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, size }) => (
                        
                        <Ionicons name="people" size={24} color="black" />
                    ),
                }}
            />
            

            
        </Tab.Navigator>
    );
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <MyTabs></MyTabs>
        </NavigationContainer>
    );
}
export default Navigation

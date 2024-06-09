import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Registro from './components/screens/Registro';
import Login from './components/screens/Login';
import Profile from './components/screens/Profile';
import { AuthProvider } from './components/screens/AuthContext';
import React, { useState, useEffect } from "react";
import Home from './components/screens/Home';
import CustomHeader from './components/CustomHeader';
import { Ionicons } from '@expo/vector-icons'
import AddPubli from './components/screens/Add-publi';
import Chat from './components/screens/Chat';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { auth } from './firebase';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


export default function App() {
  const [user, setUser] = useState(null);

  auth.onAuthStateChanged((user) => {setUser(user)});

  if (user) {
    return(
      <AuthProvider>
        <NavigationContainer>
          <Drawer.Navigator 
            initialRouteName='Home' 
            screenOptions={{ 
              headerShown: true,
              // title:'',
              header: (props) => ( <CustomHeader /> ),
            }}
            >

            <Drawer.Screen 
              name="Home" 
              component={Home}
              options={{
                drawerIcon: ({ color, size }) => (
                  <Ionicons name='home' color={"#f7d547"} size={size} />
                ),
                drawerLabelStyle: {
                  color: "#f7d547",
                  fontSize: 16
                },
                drawerContentContainerStyle: {
                  backgroundColor: "black",
                  height: '100%'
                },
                drawerActiveBackgroundColor: "#4a3d01"
              }} 
            />
            
            <Drawer.Screen 
              name="Chat" 
              component={Chat}
              options={{
                drawerIcon: ({ color, size }) => (
                  <Ionicons name='chatbox' color={"#f7d547"} size={size} />
                ),
                drawerLabelStyle: {
                  color: "#f7d547",
                  fontSize: 16
                },
                drawerContentContainerStyle: {
                  backgroundColor: "black",
                  height: '100%'
                },
                drawerActiveBackgroundColor: "#4a3d01"
              }} 
            />

            <Drawer.Screen 
              name="Perfil" 
              component={Profile} 
              options={{
                drawerIcon: ({ color, size }) => (
                  <Ionicons name='person' color={"#f7d547"} size={size} />
                ),
                drawerLabelStyle: {
                  color: "#f7d547",
                  fontSize: 16
                },
                drawerContentContainerStyle: {
                  backgroundColor: "black",
                  height: '100%'
                },
                drawerActiveBackgroundColor: "#4a3d01"
              }}
            />
            
            <Drawer.Screen 
              name="Adicionar publicação" 
              component={AddPubli} 
              options={{
                drawerIcon: ({ color, size }) => (
                  <Ionicons name='add' color={"#f7d547"} size={size} />
                ),
                drawerLabelStyle: {
                  color: "#f7d547",
                  fontSize: 16
                },
                drawerContentContainerStyle: {
                  backgroundColor: "black",
                  height: '100%'
                },
                drawerActiveBackgroundColor: "#4a3d01"
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </AuthProvider>
    )
  } else {
    return(
      <AuthProvider>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName='Login' screenOptions={{ headerShown: false}}>
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Registro" component={Registro} />
          </Drawer.Navigator>
        </NavigationContainer>
      </AuthProvider>
    )
  }
}

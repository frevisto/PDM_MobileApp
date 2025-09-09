import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { ListaTelas } from './src/types';
import Onze from './src/screens/Onze';
import {Um, Dois, Tres, Quatro, Cinco, Seis, Sete, Oito, Nove, Dez } from './src/screens/lista1';
import { Ionicons } from '@expo/vector-icons';
import CepScreen from './src/screens/lista1/CepScreen';
import { CepProvider } from './src/contexts/CepContext';

const Drawer = createDrawerNavigator<ListaTelas>();


export default function App(){
  return(
    <NavigationContainer>
      <CepProvider>
      <Drawer.Navigator>
        <Drawer.Screen name="Lista 2" component={Onze} options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="finger-print" size={24} color={color} />
          ),
        }} />

        <Drawer.Screen name="Cep" component={CepScreen} options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="map" size={24} color={color} />
          ),
        }} />

        <Drawer.Screen name="Um" component={Um} options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="add" size={24} color={color} />
          ),
        }} />
        <Drawer.Screen name="Dois" component={Dois} options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="aperture" size={24} color={color} />
          ),
        }} />
        <Drawer.Screen name="Tres" component={Tres} options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="apps" size={24} color={color} />
          ),
        }} />
        <Drawer.Screen name="Quatro" component={Quatro} options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="arrow-back" size={24} color={color} />
          ),
        }} />
        <Drawer.Screen name="Cinco" component={Cinco} options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="arrow-down" size={24} color={color} />
          ),
        }} />
        <Drawer.Screen name="Seis" component={Seis} options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="attach" size={24} color={color} />
          ),
        }} />
        <Drawer.Screen name="Sete" component={Sete} options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="at" size={24} color={color} />
          ),
        }} />
        <Drawer.Screen name="Oito" component={Oito} options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="close" size={24} color={color} />
          ),
        }} />
        <Drawer.Screen name="Nove" component={Nove} options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="film" size={24} color={color} />
          ),
        }} />
        <Drawer.Screen name="Dez" component={Dez} options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="arrow-up" size={24} color={color} />
          ),
        }} />
      </Drawer.Navigator>
      </CepProvider>  
      </NavigationContainer>
  )
};
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Filme from "./src/pages/Filme/"
import NewFilme from "./src/pages/NewFilme/"
import Details from "./src/pages/Details/"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Filme">
        <Stack.Screen
          name="Filme"
          component={Filme}
          options={{
            headerTintColor: '#3168E9'
          }}

        />

        <Stack.Screen
          name="Novo Filme"
          component={NewFilme}
          options={{
            headerTintColor: '#3168E9'
          }}

        />

        <Stack.Screen
          name="Editar Filme"
          component={Details}
          options={{
            headerTintColor: '#3168E9'
          }}

        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

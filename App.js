import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScreen';
import CardsScreen from './screens/CardsScreen';
import DetalhesScreen from './screens/DetalhesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Cards" component={CardsScreen} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
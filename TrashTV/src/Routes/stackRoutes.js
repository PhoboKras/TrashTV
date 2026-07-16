import React from "react"; // React com "R" maiúsculo
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../Pages/Login/Login';
import Cadastro from '../Pages/Cadastro/Cadastro'; 
import Routes from './index'; 

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }} 
      />

      <Stack.Screen
        name='Cadastro'
        component={Cadastro}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='MainApp'
        component={Routes} 
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
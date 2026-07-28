import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ComponentLogin from '../Components/ComponentLogin';
import ComponentCadastro from '../Components/ComponentCadastro';
import Routes from './index';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name='Login'
        component={ComponentLogin}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='Cadastro'
        component={ComponentCadastro}
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
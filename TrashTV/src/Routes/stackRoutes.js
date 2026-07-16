import react from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../Pages/Login/Login';

const stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='Login'
            component={Login}
            />

            <Stack.Screen
            name='Cadastro'
            component={Cadastro}
            />
        </Stack.Navigator>
    )
}
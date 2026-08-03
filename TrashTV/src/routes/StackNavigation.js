import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FormLogin from '../pages/Login/components/FormLogin';
import FormCadastro from '../pages/Cadastro/components/FormCadastro';
import TabNavigation from '../routes/index';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Login"
        component={FormLogin}
      />

      <Stack.Screen
        name="Cadastro"
        component={FormCadastro}
      />

      <Stack.Screen
        name="MainApp"
        component={TabNavigation}
      />
    </Stack.Navigator>
  );
}
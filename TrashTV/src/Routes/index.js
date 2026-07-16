import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from './stackRoutes';
import Login from '../Pages/Login/Login';
import Cadastro from '../Pages/Cadastro/Cadastro';
import Home from '../Pages/Home/Home';
import Filmes from '../Pages/Filmes/Filmes';
import Assinaturas from '../Pages/Assinaturas/Assinaturas';
import Perfil from '../Pages/Perfil/Perfil';
import Usuarios from '../Pages/Usuarios/Usuarios'
import Desenvolvedores from '../Pages/Desenvolvedores/Desenvolvedores'

const Tab = createBottomTabNavigator();


export default function Routes() {

  return (
    <View style={styles.container}>
        <Tab.Navigator>
          <Tab.Screen
          name='Login'
          component={StackRoutes}
          options={{
            tabBarIcon:({color, size}) =>{
              return <Feather name='log-in' color={color} size={size}/>
            }
          }}
          />
          <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarIcon:({color, size}) =>{
              return <Feather name='home' color={color} size={size}/>
            }
          }}
          />
          <Tab.Screen
          name='Filmes'
          component={Filmes}
          options={{
            tabBarIcon: ({color, size}) =>{
              return <Feather name='film' color={color} size={size}/>
            }
          }}
          />
          <Tab.Screen
          name='Assinaturas'
          component={Assinaturas}
          options={{
            tabBarIcon: ({color, size}) =>{
              return <Feather name='shopping-bag' color={color} size={size}/>
            }
          }}
          />
          <Tab.Screen
          name='Perfil'
          component={Usuarios}
          options={{
            tabBarIcon: ({color, size}) =>{
              return <Feather name='user' color={color} size={size}/>
            }
          }}
          />
          <Tab.Screen
          name='Fale Conosco'
          component={Desenvolvedores}
          options={{
            tabBarIcon: ({color, size}) =>{
              return <Feather name='phone' color={color} size={size}/>
            }
          }}
          />
        </Tab.Navigator>
    </View>
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

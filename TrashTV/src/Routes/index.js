import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Home from '../Pages/Home/Home';
import Filmes from '../Pages/Filmes/Filmes';
import Assinaturas from '../Pages/Assinaturas/Assinaturas';
import Usuarios from '../Pages/Usuarios/Usuarios';
import Desenvolvedores from '../Pages/Desenvolvedores/Desenvolvedores';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <View style={styles.container}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name='home' color={color} size={size} />
            )
          }}
        />

        <Tab.Screen
          name='Filmes'
          component={Filmes}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name='film' color={color} size={size} />
            )
          }}
        />

        <Tab.Screen
          name='Assinaturas'
          component={Assinaturas}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name='shopping-bag' color={color} size={size} />
            )
          }}
        />

        <Tab.Screen
          name='Perfil'
          component={Usuarios}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name='user' color={color} size={size} />
            )
          }}
        />

        <Tab.Screen
          name='Fale Conosco'
          component={Desenvolvedores}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name='phone' color={color} size={size} />
            )
          }}
        />

      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});
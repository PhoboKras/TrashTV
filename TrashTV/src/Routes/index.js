import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../Pages/Login/Login';
import Cadastro from '../Pages/Cadastro/Cadastro';
import Home from '../Pages/Home/Home';
import Filmes from '../Pages/Filmes/Filmes';
import Assinaturas from '../Pages/Assinaturas/Assinaturas';
import Perfil from '../Pages/Perfil/Perfil';
import Usuarios from '../Pages/Usuarios/Usuarios'
import Desenvolvedores from '../Pages/Desenvolvedores/Desenvolvedores'


export default function Routes() {

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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

import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../../../storage/StorageKeys';

import { UserContext } from '../../../contexts/UserContext';

export default function ComponentLogin() {
  const navigation = useNavigation();
  const { login } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function fazerLogin() {

    if (!email || !senha) {
      alert('Preencha e-mail e senha para continuar');
      return;
    }

    try {

      const usuariosSalvos = await AsyncStorage.getItem(STORAGE_KEYS.USERS);

      const usuarios = usuariosSalvos
        ? JSON.parse(usuariosSalvos)
        : [];

      const usuarioEncontrado = usuarios.find(
        usuario =>
          usuario.email === email &&
          usuario.senha === senha
      );


      if (!usuarioEncontrado) {
        alert('E-mail ou senha incorretos');
        return;
      }


      await login(usuarioEncontrado);


      alert(`Bem-vindo(a), ${usuarioEncontrado.nome}!`);


      navigation.reset({
        index: 0,
        routes: [{ name: 'MainApp' }],
      });


    } catch (error) {
      console.log('Erro ao realizar login:', error);
      alert('Erro ao entrar na conta');
    }
  }


  return (
    <ImageBackground
      source={require('../../../../assets/homeart.jpg')}
      style={styles.background}
      resizeMode="cover"
    >

      <View style={styles.overlay}>

        <Text style={styles.titulo}>🎬 TrashTV</Text>

        <Text style={styles.subtitulo}>
          Entre para assistir seus filmes favoritos
        </Text>


        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#888"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />


        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#888"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />


        <TouchableOpacity 
          style={styles.botaoPrimario} 
          onPress={fazerLogin}
        >
          <Text style={styles.textoBotaoPrimario}>
            Entrar
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.botaoSecundario}
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={styles.textoBotaoSecundario}>
            Criar conta
          </Text>
        </TouchableOpacity>


      </View>

    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#e50914',
    marginBottom: 8,
  },

  subtitulo: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 28,
    textAlign: 'center',
  },

  input: {
    width: '100%',
    backgroundColor: 'rgba(31,31,31,0.85)',
    color: '#fff',
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
  },

  botaoPrimario: {
    width: '100%',
    backgroundColor: '#e50914',
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },

  textoBotaoPrimario: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  botaoSecundario: {
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 4,
  },

  textoBotaoSecundario: {
    color: '#fff',
    fontSize: 14,
  },
});
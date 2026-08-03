import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../../../storage/StorageKeys';

export default function ComponentCadastro() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  async function fazerCadastro() {

    if (!nome || !email || !senha || !confirmarSenha) {
      alert('Preencha todos os campos');
      return;
    }

    if (senha !== confirmarSenha) {
      alert('As senhas não são iguais');
      return;
    }

    if (senha.length < 6) {
      alert('A senha deve possuir no mínimo 6 caracteres');
      return;
    }

    try {
      const usuariosSalvos = await AsyncStorage.getItem(STORAGE_KEYS.USERS);

      const usuarios = usuariosSalvos 
        ? JSON.parse(usuariosSalvos) 
        : [];

      const emailExiste = usuarios.some(
        usuario => usuario.email === email
      );

      if (emailExiste) {
        alert('Esse e-mail já está cadastrado');
        return;
      }

      const novoUsuario = {
        nome: nome,
        email: email,
        senha: senha
      };

      usuarios.push(novoUsuario);

      await AsyncStorage.setItem(
        STORAGE_KEYS.USERS,
        JSON.stringify(usuarios)
      );

      alert('Conta criada com sucesso! Faça login para continuar.');

      navigation.navigate('Login');

    } catch (error) {
      alert('Erro ao criar conta');
      console.log(error);
    }
  }

  return (
    <ImageBackground
      source={require('../../../../assets/homeart.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>

        <Text style={styles.titulo}>Criar conta</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#888"
          value={nome}
          onChangeText={setNome}
        />

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

        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          placeholderTextColor="#888"
          secureTextEntry
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />

        <TouchableOpacity 
          style={styles.botaoPrimario} 
          onPress={fazerCadastro}
        >
          <Text style={styles.textoBotaoPrimario}>
            Cadastrar
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.botaoSecundario}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.textoBotaoSecundario}>
            Já tenho conta
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 24,
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
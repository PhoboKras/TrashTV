import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { STORAGE_KEYS } from "../../storage/StorageKeys";
import { UserContext } from "../../contexts/UserContext";

export default function Perfil() {
  const navigation = useNavigation();
  const { user, login, logout } = useContext(UserContext);

  const [editando, setEditando] = useState(false);
  const [nome, setNome] = useState(user?.nome || "");
  const [email, setEmail] = useState(user?.email || "");

  const [alterandoSenha, setAlterandoSenha] = useState(false);
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  if (!user) {
    return (
      <View style={styles.containerVazio}>
        <Text style={styles.textoVazio}>Nenhum usuário logado.</Text>
      </View>
    );
  }

  const inicial = user.nome ? user.nome.charAt(0).toUpperCase() : "?";

  async function buscarUsuarios() {
    const salvos = await AsyncStorage.getItem(STORAGE_KEYS.USERS);
    return salvos ? JSON.parse(salvos) : [];
  }

  async function salvarPerfil() {
    if (!nome.trim() || !email.trim()) {
      alert("Preencha nome e e-mail");
      return;
    }

    try {
      const usuarios = await buscarUsuarios();

      if (email !== user.email) {
        const emailExiste = usuarios.some((u) => u.email === email);
        if (emailExiste) {
          alert("Esse e-mail já está em uso");
          return;
        }
      }

      const indice = usuarios.findIndex((u) => u.email === user.email);
      if (indice === -1) {
        alert("Usuário não encontrado");
        return;
      }

      const usuarioAtualizado = {
        ...usuarios[indice],
        nome,
        email,
      };

      usuarios[indice] = usuarioAtualizado;

      await AsyncStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(usuarios));
      await login(usuarioAtualizado);

      setEditando(false);
      alert("Perfil atualizado com sucesso!");
    } catch (error) {
      console.log(error);
      alert("Erro ao atualizar perfil");
    }
  }

  async function salvarSenha() {
    if (!novaSenha || !confirmarSenha) {
      alert("Preencha os dois campos de senha");
      return;
    }

    if (novaSenha !== confirmarSenha) {
      alert("As senhas não são iguais");
      return;
    }

    if (novaSenha.length < 6) {
      alert("A senha deve possuir no mínimo 6 caracteres");
      return;
    }

    try {
      const usuarios = await buscarUsuarios();
      const indice = usuarios.findIndex((u) => u.email === user.email);
      if (indice === -1) {
        alert("Usuário não encontrado");
        return;
      }

      const usuarioAtualizado = {
        ...usuarios[indice],
        senha: novaSenha,
      };

      usuarios[indice] = usuarioAtualizado;

      await AsyncStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(usuarios));
      await login(usuarioAtualizado);

      setNovaSenha("");
      setConfirmarSenha("");
      setAlterandoSenha(false);
      alert("Senha alterada com sucesso!");
    } catch (error) {
      console.log(error);
      alert("Erro ao alterar senha");
    }
  }

  function confirmarExclusao() {
    Alert.alert(
      "Excluir conta",
      "Tem certeza que deseja excluir sua conta? Essa ação não pode ser desfeita.",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Excluir", style: "destructive", onPress: excluirConta },
      ]
    );
  }

  async function excluirConta() {
    try {
      const usuarios = await buscarUsuarios();
      const usuariosRestantes = usuarios.filter((u) => u.email !== user.email);

      await AsyncStorage.setItem(
        STORAGE_KEYS.USERS,
        JSON.stringify(usuariosRestantes)
      );

      await logout();

      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    } catch (error) {
      console.log(error);
      alert("Erro ao excluir conta");
    }
  }

  async function sair() {
    await logout();
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarTexto}>{inicial}</Text>
        </View>
        <Text style={styles.nomeUsuario}>{user.nome}</Text>
        <Text style={styles.emailUsuario}>{user.email}</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitulo}>Dados da conta</Text>
          {!editando && (
            <TouchableOpacity onPress={() => setEditando(true)}>
              <Text style={styles.linkAcao}>Editar</Text>
            </TouchableOpacity>
          )}
        </View>

        {editando ? (
          <>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={setNome}
              placeholder="Nome"
              placeholderTextColor="#888"
            />

            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="E-mail"
              placeholderTextColor="#888"
              autoCapitalize="none"
              keyboardType="email-address"
            />

            <View style={styles.linhaBotoes}>
              <TouchableOpacity
                style={styles.botaoCancelar}
                onPress={() => {
                  setNome(user.nome);
                  setEmail(user.email);
                  setEditando(false);
                }}
              >
                <Text style={styles.textoBotaoSecundario}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botaoSalvar} onPress={salvarPerfil}>
                <Text style={styles.textoBotaoPrimario}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
            <View style={styles.linhaInfo}>
              <Text style={styles.labelInfo}>Nome</Text>
              <Text style={styles.valorInfo}>{user.nome}</Text>
            </View>
            <View style={styles.linhaInfo}>
              <Text style={styles.labelInfo}>E-mail</Text>
              <Text style={styles.valorInfo}>{user.email}</Text>
            </View>
          </>
        )}
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitulo}>Senha</Text>
          {!alterandoSenha && (
            <TouchableOpacity onPress={() => setAlterandoSenha(true)}>
              <Text style={styles.linkAcao}>Alterar</Text>
            </TouchableOpacity>
          )}
        </View>

        {alterandoSenha ? (
          <>
            <Text style={styles.label}>Nova senha</Text>
            <TextInput
              style={styles.input}
              value={novaSenha}
              onChangeText={setNovaSenha}
              placeholder="Nova senha"
              placeholderTextColor="#888"
              secureTextEntry
            />

            <Text style={styles.label}>Confirmar nova senha</Text>
            <TextInput
              style={styles.input}
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              placeholder="Confirmar nova senha"
              placeholderTextColor="#888"
              secureTextEntry
            />

            <View style={styles.linhaBotoes}>
              <TouchableOpacity
                style={styles.botaoCancelar}
                onPress={() => {
                  setNovaSenha("");
                  setConfirmarSenha("");
                  setAlterandoSenha(false);
                }}
              >
                <Text style={styles.textoBotaoSecundario}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botaoSalvar} onPress={salvarSenha}>
                <Text style={styles.textoBotaoPrimario}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <Text style={styles.textoSenhaOculta}>••••••••</Text>
        )}
      </View>

      <TouchableOpacity style={styles.botaoSair} onPress={sair}>
        <Text style={styles.textoBotaoSecundario}>Sair da conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoExcluirConta} onPress={confirmarExclusao}>
        <Text style={styles.textoBotaoExcluir}>Excluir conta</Text>
      </TouchableOpacity>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0B",
    paddingHorizontal: 20,
  },

  containerVazio: {
    flex: 1,
    backgroundColor: "#0B0B0B",
    alignItems: "center",
    justifyContent: "center",
  },

  textoVazio: {
    color: "#AAA",
    fontSize: 16,
  },

  header: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 30,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#E50914",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },

  avatarTexto: {
    color: "#FFF",
    fontSize: 36,
    fontWeight: "900",
  },

  nomeUsuario: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
  },

  emailUsuario: {
    color: "#AAA",
    fontSize: 14,
    marginTop: 4,
  },

  card: {
    backgroundColor: "#181818",
    borderRadius: 14,
    padding: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#2F2F2F",
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  cardTitulo: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },

  linkAcao: {
    color: "#E50914",
    fontSize: 14,
    fontWeight: "600",
  },

  linhaInfo: {
    marginBottom: 12,
  },

  labelInfo: {
    color: "#777",
    fontSize: 12,
    marginBottom: 2,
  },

  valorInfo: {
    color: "#FFF",
    fontSize: 15,
  },

  label: {
    color: "#AAA",
    fontSize: 13,
    marginBottom: 6,
    marginTop: 8,
  },

  input: {
    backgroundColor: "#242424",
    color: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
  },

  linhaBotoes: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 16,
  },

  botaoCancelar: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
    marginRight: 10,
  },

  botaoSalvar: {
    backgroundColor: "#E50914",
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 8,
  },

  textoSenhaOculta: {
    color: "#AAA",
    fontSize: 18,
    letterSpacing: 2,
  },

  botaoSair: {
    borderWidth: 1,
    borderColor: "#444",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },

  botaoExcluirConta: {
    backgroundColor: "rgba(229,9,20,0.15)",
    borderWidth: 1,
    borderColor: "#E50914",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },

  textoBotaoPrimario: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 15,
  },

  textoBotaoSecundario: {
    color: "#CCC",
    fontWeight: "600",
    fontSize: 15,
  },

  textoBotaoExcluir: {
    color: "#E50914",
    fontWeight: "bold",
    fontSize: 15,
  },
});
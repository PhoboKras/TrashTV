import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";

import Logo from "../../../assets/ChatGPT Image 13 de jul. de 2026, 19_24_12.png";

const TELEFONE_EXIBICAO = "(24) 98122-6045";
const TELEFONE_DISCAGEM = "5524981226045"; // 

export default function FaleConosco() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function enviarMensagem() {
    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      alert("Preencha todos os campos antes de enviar");
      return;
    }

    alert(
      `Valeu, ${nome}! Sua reclamação (ou elogio, duvidamos) já está a caminho da nossa equipe.`
    );

    setNome("");
    setEmail("");
    setMensagem("");
  }

  function ligar() {
    Linking.openURL(`tel:${TELEFONE_DISCAGEM}`).catch(() => {
      alert("Não foi possível abrir o discador");
    });
  }

  function chamarNoWhatsapp() {
    const texto = encodeURIComponent(
      "Oi! Vim pelo app Trash TV e preciso muito falar com vocês."
    );
    Linking.openURL(`https://wa.me/${TELEFONE_DISCAGEM}?text=${texto}`).catch(
      () => {
        alert("Não foi possível abrir o WhatsApp");
      }
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headerLogo}>
        <Image source={Logo} style={styles.logo} />
      </View>

      <View style={styles.introContainer}>
        <Text style={styles.titulo}>Fale Conosco</Text>
        <Text style={styles.frase}>
          Sim, humanos de verdade cuidam desse app — e eles assistiram a
          TODOS esses filmes ruins só pra você. Manda sua mensagem, sua
          crítica ou sua teoria de que "Rubber" é uma obra-prima incompreendida.
          Prometemos ler antes de ignorar educadamente.
        </Text>
      </View>

      <View style={styles.cardContato}>
        <Text style={styles.cardContatoTitulo}>Contato direto</Text>
        <Text style={styles.cardContatoTelefone}>{TELEFONE_EXIBICAO}</Text>
        <Text style={styles.cardContatoLegenda}>
          Atendimento das 9h às 18h. Ou de madrugada, se o filme for
          realmente ruim o suficiente pra tirar o sono de alguém da equipe.
        </Text>

        <View style={styles.botoesContato}>
          <TouchableOpacity style={styles.botaoLigar} onPress={ligar}>
            <Text style={styles.textoBotaoContato}>📞 Ligar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoWhatsapp}
            onPress={chamarNoWhatsapp}
          >
            <Text style={styles.textoBotaoContato}>💬 WhatsApp</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.formulario}>
        <Text style={styles.formularioTitulo}>Ou escreva pra gente</Text>

        <TextInput
          style={styles.input}
          placeholder="Seu nome"
          placeholderTextColor="#888"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Seu e-mail"
          placeholderTextColor="#888"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={[styles.input, styles.inputMensagem]}
          placeholder="Sua mensagem (pode ser trash também)"
          placeholderTextColor="#888"
          value={mensagem}
          onChangeText={setMensagem}
          multiline
          numberOfLines={5}
          textAlignVertical="top"
        />

        <TouchableOpacity style={styles.botaoEnviar} onPress={enviarMensagem}>
          <Text style={styles.textoBotaoEnviar}>Enviar mensagem</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rodape}>
        <Text style={styles.rodapeTexto}>
          Trash TV — feito com carinho, café e um orçamento de filme B.
        </Text>
      </View>

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

  headerLogo: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 16,
  },

  logo: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },

  introContainer: {
    marginBottom: 24,
  },

  titulo: {
    color: "#E50914",
    fontSize: 28,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 12,
  },

  frase: {
    color: "#CFCFCF",
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
  },

  cardContato: {
    backgroundColor: "#181818",
    borderRadius: 14,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#2F2F2F",
  },

  cardContatoTitulo: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },

  cardContatoTelefone: {
    color: "#E50914",
    fontSize: 24,
    fontWeight: "900",
    marginBottom: 8,
  },

  cardContatoLegenda: {
    color: "#AAA",
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 16,
  },

  botoesContato: {
    flexDirection: "row",
  },

  botaoLigar: {
    flex: 1,
    backgroundColor: "#E50914",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginRight: 10,
  },

  botaoWhatsapp: {
    flex: 1,
    backgroundColor: "#242424",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#3A3A3A",
  },

  textoBotaoContato: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
  },

  formulario: {
    backgroundColor: "#181818",
    borderRadius: 14,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#2F2F2F",
  },

  formularioTitulo: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },

  input: {
    backgroundColor: "#242424",
    color: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    marginBottom: 12,
  },

  inputMensagem: {
    height: 110,
    paddingTop: 12,
  },

  botaoEnviar: {
    backgroundColor: "#E50914",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 4,
  },

  textoBotaoEnviar: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },

  rodape: {
    alignItems: "center",
    paddingTop: 8,
  },

  rodapeTexto: {
    color: "#555",
    fontSize: 12,
    textAlign: "center",
  },
});
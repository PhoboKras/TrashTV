import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

import Logo from "../../../assets/ChatGPT Image 13 de jul. de 2026, 19_24_12.png";

const devs = [
  {
    nome: "Ricardo",
    foto: "https://link-da-foto.com/ricardo.jpg",
    cargo: "O maior farmador de aura 67",
    descricao:
      "Arquiteto supremo do Trash TV. Quando não está codando, está farmando aura em silêncio e aparecendo com uma solução que ninguém esperava.",
  },
  {
    nome: "Juan",
    foto: "https://link-da-foto.com/juan.jpg",
    cargo: "Cria de Alphaville",
    descricao:
      "Especialista em ideias diferenciadas e residente oficial do luxo duvidoso. Dizem que ele nasceu com Wi-Fi 5G e uma opinião sobre tudo.",
  },
  {
    nome: "Agnes",
    foto: "https://link-da-foto.com/agnes.jpg",
    cargo: "Guardião das ideias aleatórias",
    descricao:
      "Transforma qualquer ideia estranha em algo funcional. A pessoa responsável por lembrar que o projeto precisa continuar fazendo sentido.",
  },
  {
    nome: "Victor",
    foto: "https://link-da-foto.com/joao.jpg",
    cargo: "Mestre das linhas de código",
    descricao:
      "Vulgo 'Espanca Git'. Seu poder especial é abrir o código antigo e dizer: 'dá para melhorar isso'.",
  },
];

export default function Desenvolvedores() {
  const [fotosComErro, setFotosComErro] = useState({});

  function marcarErro(index) {
    setFotosComErro((anterior) => ({ ...anterior, [index]: true }));
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.logo} />
      </View>

      <View>
        <Text style={styles.title}>Quem fez essa obra duvidosa?</Text>

        <Text style={styles.subtitle}>
          Uma equipe pequena, mas com aura suficiente para sobreviver aos
          piores filmes.
        </Text>
      </View>

      <View style={styles.lista}>
        {devs.map((dev, index) => {
          const inicial = dev.nome.charAt(0).toUpperCase();
          const fotoFalhou = fotosComErro[index];

          return (
            <View key={index} style={styles.card}>
              {fotoFalhou ? (
                <View style={styles.avatarFallback}>
                  <Text style={styles.avatarFallbackTexto}>{inicial}</Text>
                </View>
              ) : (
                <Image
                  source={{ uri: dev.foto }}
                  style={styles.avatar}
                  onError={() => marcarErro(index)}
                />
              )}

              <View style={styles.info}>
                <Text style={styles.name}>{dev.nome}</Text>

                <View style={styles.cargoPill}>
                  <Text style={styles.role}>{dev.cargo}</Text>
                </View>

                <Text style={styles.description}>{dev.descricao}</Text>
              </View>
            </View>
          );
        })}
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
  },

  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

 logo: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },

  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    color: "#AAA",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
  },

  lista: {
    paddingHorizontal: 18,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#181818",
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#2F2F2F",
  },

  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginRight: 16,
    backgroundColor: "#242424",
  },

  avatarFallback: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginRight: 16,
    backgroundColor: "#E50914",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarFallbackTexto: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "900",
  },

  info: {
    flex: 1,
  },

  name: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },

  cargoPill: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(229,9,20,0.15)",
    borderWidth: 1,
    borderColor: "#E50914",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginBottom: 10,
  },

  role: {
    color: "#E50914",
    fontSize: 12,
    fontWeight: "700",
  },

  description: {
    color: "#CFCFCF",
    fontSize: 13,
    lineHeight: 19,
  },

  rodape: {
    alignItems: "center",
    paddingTop: 8,
    paddingHorizontal: 24,
  },

  rodapeTexto: {
    color: "#555",
    fontSize: 12,
    textAlign: "center",
  },
});
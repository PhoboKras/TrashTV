import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

import Logo from "../../../assets/ChatGPT Image 13 de jul. de 2026, 19_24_12.png";


const devs = [
  {
    nome: "Ricardo",
    foto: require("../../../assets/ricardo.jpeg"),
    cargo: "O maior farmador de aura 67",
    descricao:
      "Arquiteto supremo do Trash TV. Quando não está codando, está farmando aura em silêncio e aparecendo com uma solução que ninguém esperava.",
  },
  {
    nome: "Juan",
    foto: require("../../../assets/juan.jpeg"),
    cargo: "Cria de Alphaville",
    descricao:
      "Especialista em ideias diferenciadas e residente oficial do luxo duvidoso. Dizem que ele nasceu com Wi-Fi 5G e uma opinião sobre tudo.",
  },
  {
    nome: "Agnes",
    foto: require("../../../assets/agnes.jpeg"),
    cargo: "Guardiã das ideias aleatórias",
    descricao:
      "Transforma qualquer ideia estranha em algo funcional. A pessoa responsável por lembrar que o projeto precisa continuar fazendo sentido.",
  },
  {
    nome: "Victor",
    foto: require("../../../assets/victor.jpeg"),
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

      <View style={styles.titleContainer}>
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
               
                <View style={styles.avatarContainer}>
                  <Image
                    source={dev.foto}
                    
                    style={[
                      styles.avatar,
                      dev.nome === "Agnes" && styles.avatarAgnes,
                    ]}
                    onError={() => marcarErro(index)}
                    resizeMode="cover"
                  />
                </View>
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

  titleContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
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
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#181818",
    borderRadius: 14,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#2F2F2F",
  },

  
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    backgroundColor: "#242424",
    overflow: "hidden",
    alignItems: "center", 
    justifyContent: "center", 
  },

  avatar: {
    width: "100%",
    height: "100%",
  },

  avatarAgnes: {
    transform: [{ translateY: 20 }], 
    height: "130%",
  },

  avatarFallback: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    backgroundColor: "#E50914",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarFallbackTexto: {
    color: "#FFF",
    fontSize: 44,
    fontWeight: "900",
  },

  info: {
    alignItems: "center",
  },

  name: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
    textAlign: "center",
  },

  cargoPill: {
    alignSelf: "center",
    backgroundColor: "rgba(229,9,20,0.15)",
    borderWidth: 1,
    borderColor: "#E50914",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginBottom: 12,
  },

  role: {
    color: "#E50914",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
  },

  description: {
    color: "#CFCFCF",
    fontSize: 13,
    lineHeight: 19,
    textAlign: "center",
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
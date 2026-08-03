import React from "react";
import {ScrollView, View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default function Home() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.logo}>🎬🗑️ Trash TV</Text>
        <Text style={styles.user}>Olá!</Text>
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerCategoria}>
          Terror • Ficção B • Comédia Trash
        </Text>

        <Text style={styles.bannerTitulo}>
          O MELHOR DO PIOR CINEMA
        </Text>

        <Text style={styles.bannerDescricao}>
          Descubra filmes tão ruins que ficam incríveis.
          Dos clássicos cult aos maiores desastres do cinema.
        </Text>

        <View style={styles.botoes}>
          <TouchableOpacity style={styles.botaoPrincipal}>
            <Text style={styles.textoPrincipal}>▶ Assistir</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoSecundario}>
            <Text style={styles.textoSecundario}>ℹ Mais informações</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Categorias */}

      <Text style={styles.tituloCategoria}>Em Alta</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[1, 2, 3, 4, 5].map((item) => (
          <View key={item} style={styles.card}>
            <Text style={styles.cardTexto}>Filme {item}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.tituloCategoria}>Terror Trash</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[1, 2, 3, 4, 5].map((item) => (
          <View key={item} style={styles.card}>
            <Text style={styles.cardTexto}>Terror {item}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.tituloCategoria}>Clássicos Cult</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[1, 2, 3, 4, 5].map((item) => (
          <View key={item} style={styles.card}>
            <Text style={styles.cardTexto}>Cult {item}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={{ height: 30 }} />
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
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    color: "#E50914",
    fontSize: 28,
    fontWeight: "bold",
  },

  user: {
    color: "#FFF",
    fontSize: 16,
  },

  banner: {
    backgroundColor: "#181818",
    marginHorizontal: 18,
    borderRadius: 18,
    padding: 22,
    marginBottom: 30,
  },

  bannerCategoria: {
    color: "#AAAAAA",
    fontSize: 14,
    marginBottom: 8,
  },

  bannerTitulo: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 12,
  },

  bannerDescricao: {
    color: "#CFCFCF",
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 22,
  },

  botoes: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  botaoPrincipal: {
    backgroundColor: "#E50914",
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginRight: 10,
  },

  textoPrincipal: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },

  botaoSecundario: {
    backgroundColor: "#333333",
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },

  textoSecundario: {
    color: "#FFF",
    fontWeight: "600",
  },

  tituloCategoria: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 18,
    marginBottom: 15,
    marginTop: 10,
  },

  card: {
    width: 140,
    height: 200,
    backgroundColor: "#232323",
    borderRadius: 12,
    marginLeft: 18,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2F2F2F",
  },

  cardTexto: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});
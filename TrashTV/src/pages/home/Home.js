import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, Modal, Linking } from "react-native";

import Logo from "../../../assets/ChatGPT Image 13 de jul. de 2026, 19_24_12.png";


const filmeDestaque = {
  titulo: "O Melhor do Pior Cinema",
  trailerUrl: "",
};

function abrirTrailer(filme) {
  const url = filme.trailerUrl
    ? filme.trailerUrl
    : `https://www.youtube.com/results?search_query=${encodeURIComponent(
        filme.titulo + " trailer"
      )}`;

  Linking.openURL(url).catch(() => {
    alert("Não foi possível abrir o trailer.");
  });
}

const filmesEmAlta = [
  {
    id: 1,
    titulo: "Vingador Tóxico",
    uri: "https://br.web.img3.acsta.net/pictures/15/05/05/17/25/175511.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=27E4Qfj7iEY",
  },
  {
    id: 2,
    titulo: "Rubber",
    uri: "https://upload.wikimedia.org/wikipedia/en/f/fa/Rubber-2010-film-poster.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=Zmtd7NiCCi4",
  },
  {
    id: 3,
    titulo: "Sharknado",
    uri: "https://resizing.flixster.com/76Qhl3MNJ1tcP-oOonsTeZWk6JY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Q1ZTExOTg4LWE5NDUtNGE2My1hNGFmLTVlODQ2MGU2MmFmMi5qcGc=",
    trailerUrl: "https://www.youtube.com/watch?v=dSjtUjxkSpc",
  },
  {
    id: 4,
    titulo: "The VelociPastor",
    uri: "https://upload.wikimedia.org/wikipedia/en/0/0c/The_VelociPastor.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=JppwKpfOgyo",
  },
  {
    id: 5,
    titulo: "Lavalantula",
    uri: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Lavalantula.jpg/250px-Lavalantula.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=sdYcP0T95EI",
  },
];

const filmesTerrorTrash = [
  {
    id: 1,
    titulo: "Ataque dos Tomates Assassinos",
    uri: "https://upload.wikimedia.org/wikipedia/pt/0/06/Attack_Killer_Tomatoes.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=4X_P8PoRgbc",
  },
  {
    id: 2,
    titulo: "Re-Animator",
    uri: "https://upload.wikimedia.org/wikipedia/en/6/6e/Reanimator_poster.png",
    trailerUrl: "https://www.youtube.com/watch?v=zf-5_Je_D80",
  },
  {
    id: 3,
    titulo: "Terrifier",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL49pU_abSLVBEgBflDzbZBJhIl0LXgZ6QFU4cCQVaDQ&s=10",
    trailerUrl: "https://www.youtube.com/watch?v=PaZp7DCrJqA",
  },
  {
    id: 4,
    titulo: "Python (2000)",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJLN0OqIzVo69bisgICwA1zfVTPJG7qU1kGOsBaA-fig&s=10",
    // não achei trailer isolado; este é o filme completo dublado
    trailerUrl: "https://www.youtube.com/watch?v=9j2nMlMJJQ0",
  },
  {
    id: 5,
    titulo: "Evil Dead (2013)",
    uri: "https://m.media-amazon.com/images/S/pv-target-images/b3ddd941682f0634a426808127331eb92dbd577df8bcdf72b346dbd0ac6216f0.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=G2vpYyp55MA",
  },
];

const filmesClassicosCult = [
  {
    id: 1,
    titulo: "Mistério do Cesto",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_hqcwzFcvgyqSQLi-c8vXPW7ipXiC_3NWdUyiKJd-Q&s=10",
    trailerUrl: "https://www.youtube.com/watch?v=9tpZwV3ia30",
  },
  {
    id: 2,
    titulo: "Palhaços Assassinos do Espaço Sideral",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7QWZ5UlsnKgFSrIohewAgfVBBD3dfJcTgDHFKV4UghQ&s=10",
    trailerUrl: "https://www.youtube.com/watch?v=cVQ3AGzeB_0",
  },
  {
    id: 3,
    titulo: "Troll 2",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAkOJFFz2JGqOLYg7bSfAUI3FYRwcLVViqDPB2IWR0A&s=10",
    trailerUrl: "https://www.youtube.com/watch?v=CkNB0w1fYKk",
  },
  {
    id: 4,
    titulo: "Lixo das Ruas",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-MZjPQ0LPrCXsZpBdp8pS45ANX7PolUJgiEW2mj2kTg&s",
    trailerUrl: "https://www.youtube.com/watch?v=Ryg9KYXXq0U",
  },
  {
    id: 5,
    titulo: "A Coisa",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8b33tPdk6hixPzIDiLDsT4KcjyxVV83YloychIhvYg&s=10",
    trailerUrl: "https://www.youtube.com/watch?v=WfAHOOl3brs",
  },
];

export default function Home() {
  const [mostrarInfo, setMostrarInfo] = useState(false);

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Image source={Logo} style={styles.logo} />
      </View>

      <View style={styles.saudacaoContainer}>
        <Text style={styles.saudacaoSombra}>Olá, sobrevivente...</Text>
        <Text style={styles.saudacao}>Olá, sobrevivente...</Text>
      </View>

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
          <TouchableOpacity
            style={styles.botaoPrincipal}
            onPress={() => abrirTrailer(filmeDestaque)}
          >
            <Text style={styles.textoPrincipal}>▶ Assistir</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoSecundario}
            onPress={() => setMostrarInfo(true)}
          >
            <Text style={styles.textoSecundario}>ℹ Mais informações</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal de informações */}
      <Modal
        visible={mostrarInfo}
        transparent
        animationType="fade"
        onRequestClose={() => setMostrarInfo(false)}
      >
        <View style={styles.modalFundo}>
          <View style={styles.modalCaixa}>
            <Text style={styles.modalTitulo}>Sobre a Trash TV</Text>
            <Text style={styles.modalTexto}>
              Criada por desenvolvedores que tiveram a brilhante ideia de
              fazer tudo dar errado, a TrashTV nasceu assim: o primeiro
              app para quem ama o que há de pior no universo
              cinematográfico.
            </Text>
            <TouchableOpacity
              style={styles.modalBotaoFechar}
              onPress={() => setMostrarInfo(false)}
            >
              <Text style={styles.modalTextoFechar}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      <Text style={styles.tituloCategoria}>Em Alta</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {filmesEmAlta.map((filme) => (
          <TouchableOpacity
            key={filme.id}
            style={styles.card}
            onPress={() => abrirTrailer(filme)}
          >
            <Image
              source={{ uri: filme.uri }}
              style={styles.cardImagem}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.tituloCategoria}>Terror Trash</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {filmesTerrorTrash.map((filme) => (
          <TouchableOpacity
            key={filme.id}
            style={styles.card}
            onPress={() => abrirTrailer(filme)}
          >
            <Image
              source={{ uri: filme.uri }}
              style={styles.cardImagem}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.tituloCategoria}>Clássicos Cult</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {filmesClassicosCult.map((filme) => (
          <TouchableOpacity
            key={filme.id}
            style={styles.card}
            onPress={() => abrirTrailer(filme)}
          >
            <Image
              source={{ uri: filme.uri }}
              style={styles.cardImagem}
              resizeMode="cover"
            />
          </TouchableOpacity>
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

  saudacaoContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    paddingHorizontal: 20,
  },

  saudacaoSombra: {
    position: "absolute",
    top: 3,
    left: 0,
    right: 0,
    fontSize: 26,
    fontWeight: "900",
    fontStyle: "italic",
    color: "#4A0000",
    letterSpacing: 1,
    textAlign: "center",
  },

  saudacao: {
    fontSize: 26,
    fontWeight: "900",
    fontStyle: "italic",
    color: "#E50914",
    letterSpacing: 1,
    textAlign: "center",
    textShadowColor: "#8B0000",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 6,
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

  modalFundo: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.75)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  modalCaixa: {
    backgroundColor: "#181818",
    borderRadius: 16,
    padding: 24,
    width: "100%",
    borderWidth: 1,
    borderColor: "#E50914",
  },

  modalTitulo: {
    color: "#E50914",
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 12,
    textAlign: "center",
  },

  modalTexto: {
    color: "#CFCFCF",
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 20,
    textAlign: "center",
  },

  modalBotaoFechar: {
    backgroundColor: "#E50914",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  modalTextoFechar: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 15,
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
    overflow: "hidden",
  },

  cardImagem: {
    width: "100%",
    height: "100%",
  },

  cardTexto: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});
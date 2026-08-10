import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, Modal, Linking } from "react-native";

import Logo from "../../../assets/ChatGPT Image 13 de jul. de 2026, 19_24_12.png";

const filmeDestaque = {
  titulo: "Band Cine Trash",
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
   {
    id: 6,
    titulo: "Acampamento Sinistro",
    uri: "https://m.media-amazon.com/images/M/MV5BN2IyOWU4MGUtZjEyNC00ODNjLTg3OGMtZmNlM2ZlZDYzOWJjXkEyXkFqcGc@._V1_.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=vImv6yxkxJE",
   },
   {
    id: 7,
    titulo: "O Soro do Mal (1988)",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS88L29obpDd1ARMBwUjkrYF2NJWj2fhFwymTIjWVukA&s=10",
    trailerUrl: "https://www.youtube.com/watch?v=AUno-Hzk3EE",
   },
   {
    id: 8,
    titulo: "A Visão do Terror",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qISPqzIiyu3tbhvLUP1tcMTtSN5gXoKFYGM5xrl4nA&s=10",
    trailerUrl: "https://www.youtube.com/watch?v=nKoFRD0n4tQ",
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
    trailerUrl: "https://www.youtube.com/watch?v=9j2nMlMJJQ0",
  },
  {
    id: 5,
    titulo: "Evil Dead (2013)",
    uri: "https://m.media-amazon.com/images/S/pv-target-images/b3ddd941682f0634a426808127331eb92dbd577df8bcdf72b346dbd0ac6216f0.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=G2vpYyp55MA",
  },
  {
    id: 6,
    titulo: "Baile de Formatura (1980)",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz5ICZIzXO27KlrY7GoAoV_7dTIBRa33OExGOipzK9hw&s=10",
    trailerUrl: "https://www.youtube.com/watch?v=gXE65GDGjWM"
  },
  {
    id: 7,
    titulo: "A Semente da Maldição",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUQOIp-lePdKxDCjsQV0Ymhpz38IrG45GxuG5bQlKxKA&s=10",
    trailerUrl: "https://www.youtube.com/watch?v=UdOKtq2bquc&rco=1",
  },
  {
    id: 8,
    titulo: "Robôs Assassinos (1986)",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVyD1mCmakdltwgANdR4U8-tjrn8aF7-xULZEuU0NbBA&s=10",
    trailerUrl: "https://www.youtube.com/watch?v=a5UzZRn8MAs"
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
  {
    id: 6,
    titulo: "Ghoulies",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDaJ_b45Q3kro3UeHopl1p7BnEyGYVTP0VWdJpo0SQg&s=10",
    trailerUrl: "https://www.youtube.com/watch?v=HysJUwWWAEI"
  },
  {
    id: 7,
    titulo: "A Hora das Criaturas",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRWAteCmjHCLutTDi3t-b9jwpiZkbXIXEnAZFb1FqXMw&s=10",
    trailerUrl: "https://www.youtube.com/watch?v=hiLtxJ9hvpg",
  },
  {
    id: 8,
    titulo: "A Casa de Cera",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEA7D8nF0SbOnARw5It5FILHvoNy5vpaFrPYj2n5o4_A&s=10",
    trailerUrl: "https://www.youtube.com/watch?v=iRzDyUQi2Qk",
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
        <Image
          source={{
            uri: "https://www.kapowtoys.co.uk/wp-content/uploads/2026/04/NECA-Terrifier-2-Ultimate-Art-the-Clown-Blood-Splattered-Action-Figure.-2-324x432.webp",
          }}
          style={styles.bannerImagem}
          resizeMode="cover"
        />

        <View style={styles.bannerConteudo}>
          <Text style={styles.bannerCategoria}>
            Terror • Ficção B • Comédia Trash
          </Text>

          <Text style={styles.bannerTitulo}>
            O MELHOR DO PIOR CINEMA
          </Text>

          <Text style={styles.bannerDescricao}>
            Descubra filmes tão ruins que ficam incríveis. Dos clássicos cult aos maiores desastres do cinema.
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
              <Text style={styles.textoSecundario}>ℹ Info</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      
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

  /* Banner modificado */
  banner: {
    backgroundColor: "#181818",
    marginHorizontal: 18,
    borderRadius: 18,
    padding: 14,
    marginBottom: 30,
    flexDirection: "row", 
    alignItems: "center",
    overflow: "hidden",
  },

  bannerImagem: {
    width: 110,
    height: 160,
    borderRadius: 12,
    marginRight: 14,
  },

  bannerConteudo: {
    flex: 1,
  },

  bannerCategoria: {
    color: "#AAAAAA",
    fontSize: 11,
    fontWeight: "600",
    marginBottom: 4,
  },

  bannerTitulo: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },

  bannerDescricao: {
    color: "#CFCFCF",
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 12,
  },

  botoes: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  botaoPrincipal: {
    backgroundColor: "#E50914",
    flex: 1,
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: "center",
    marginRight: 6,
  },

  textoPrincipal: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 13,
  },

  botaoSecundario: {
    backgroundColor: "#333333",
    flex: 1,
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: "center",
  },

  textoSecundario: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 13,
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
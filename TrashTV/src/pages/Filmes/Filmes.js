import React, { useEffect, useState } from "react";
import {ScrollView, View, Text, StyleSheet, TouchableOpacity} from "react-native";

import FilmeCard from "./components/FilmeCard";
import ModalFilme from "./components/ModalFilme";
import FormFilme from "./components/FormFilme";

import { listarFilmes } from "../../storage/FilmeStorage";
import { adicionarFilme } from "../../storage/FilmeStorage";
import { editarFilme } from "../../storage/FilmeStorage";


export default function Filmes() {

  const [filmes, setFilmes] = useState([]);
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);

  const [modalAberto, setModalAberto] = useState(false);

  const [formAberto, setFormAberto] = useState(false);

  const [filmeEdicao, setFilmeEdicao] = useState(null);

  useEffect(() => {
    carregarFilmes();
  }, []);

  async function carregarFilmes() {

    const lista = await listarFilmes();

    setFilmes(lista);

  }

  function abrirModal(filme) {

    setFilmeSelecionado(filme);
    setModalAberto(true);

  }

  function fecharModal() {

    setModalAberto(false);
    setFilmeSelecionado(null);

  }

  function novoFilme() {

    setFilmeEdicao(null);
    setFormAberto(true);

  }

  function editar(filme) {

    setFilmeEdicao(filme);
    setFormAberto(true);

  }

  async function salvar(filme) {

    if (filme.id) {

      await editarFilme(filme);

    } else {

      await adicionarFilme(filme);

    }

    setFormAberto(false);

    carregarFilmes();

  }

  return (

    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      <Text style={styles.titulo}>
        🎬 Catálogo Trash TV
      </Text>

      <Text style={styles.subtitulo}>
        Os melhores piores filmes já feitos
      </Text>

      <TouchableOpacity
        style={styles.botaoNovo}
        onPress={novoFilme}
      >

        <Text style={styles.textoBotao}>
          + Novo Filme
        </Text>

      </TouchableOpacity>

      <View style={styles.lista}>

        {filmes.map((filme) => (

          <FilmeCard
            key={filme.id}
            filme={filme}
            abrirModal={() => abrirModal(filme)}
            editar={() => editar(filme)}
          />

        ))}

      </View>

      <ModalFilme
        visible={modalAberto}
        filme={filmeSelecionado}
        fechar={fecharModal}
        editar={editar}
        excluir={() => {}}
      />

      <FormFilme
        visible={formAberto}
        fechar={() => setFormAberto(false)}
        salvar={salvar}
        filme={filmeEdicao}
      />

    </ScrollView>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#0B0B0B",
    paddingHorizontal: 20,
  },

  titulo: {
    color: "#E50914",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 60,
  },

  subtitulo: {
    color: "#AAA",
    fontSize: 15,
    marginTop: 8,
    marginBottom: 20,
  },

  botaoNovo: {
    backgroundColor: "#E50914",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },

  textoBotao: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },

  lista: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: 30,
  },

});
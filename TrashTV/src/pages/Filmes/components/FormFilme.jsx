import React, { useEffect, useState } from "react";
import {Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView} from "react-native";

export default function FormFilme({
  visible,
  fechar,
  salvar,
  filme,
}) {

  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [ano, setAno] = useState("");
  const [nota, setNota] = useState("");
  const [descricao, setDescricao] = useState("");
  const [trailer, setTrailer] = useState("");

  useEffect(() => {

    if (filme) {

      setTitulo(filme.titulo);
      setCategoria(filme.categoria);
      setAno(String(filme.ano));
      setNota(String(filme.nota));
      setDescricao(filme.descricao);
      setTrailer(filme.trailer);

    } else {

      limparCampos();

    }

  }, [filme]);

  function limparCampos() {

    setTitulo("");
    setCategoria("");
    setAno("");
    setNota("");
    setDescricao("");
    setTrailer("");

  }

  function salvarFilme() {

    if (!titulo || !categoria || !ano || !nota || !descricao || !trailer) {

      alert("Precisa preencher todos os campos.");
      return;

    }

    salvar({

      id: filme?.id,

      titulo,

      categoria,

      ano: Number(ano),

      nota: Number(nota),

      descricao,

      trailer,

    });

    limparCampos();

  }

  return (

    <Modal
      visible={visible}
      animationType="slide"
      transparent
    >

      <View style={styles.overlay}>

        <View style={styles.container}>

          <ScrollView>

            <Text style={styles.titulo}>
              {filme ? "Editar Filme" : "Novo Filme"}
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Título"
              value={titulo}
              onChangeText={setTitulo}
            />

            <TextInput
              style={styles.input}
              placeholder="Categoria"
              value={categoria}
              onChangeText={setCategoria}
            />

            <TextInput
              style={styles.input}
              placeholder="Ano"
              keyboardType="numeric"
              value={ano}
              onChangeText={setAno}
            />

            <TextInput
              style={styles.input}
              placeholder="Nota"
              keyboardType="numeric"
              value={nota}
              onChangeText={setNota}
            />

            <TextInput
              style={styles.input}
              placeholder="Descrição"
              multiline
              value={descricao}
              onChangeText={setDescricao}
            />

            <TextInput
              style={styles.input}
              placeholder="ID do Trailer no YouTube"
              value={trailer}
              onChangeText={setTrailer}
            />

            <TouchableOpacity
              style={styles.botaoSalvar}
              onPress={salvarFilme}
            >

              <Text style={styles.textoBotao}>
                Salvar
              </Text>

            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoCancelar}
              onPress={fechar}
            >

              <Text style={styles.textoCancelar}>
                Cancelar
              </Text>

            </TouchableOpacity>

          </ScrollView>

        </View>

      </View>

    </Modal>

  );

}

const styles = StyleSheet.create({

  overlay:{
    flex:1,
    backgroundColor:"rgba(0,0,0,0.8)",
    justifyContent:"center",
    padding:20,
  },

  container:{
    backgroundColor:"#181818",
    borderRadius:15,
    padding:20,
    maxHeight:"90%",
  },

  titulo:{
    color:"#FFF",
    fontSize:24,
    fontWeight:"bold",
    marginBottom:20,
  },

  input:{
    backgroundColor:"#2A2A2A",
    color:"#FFF",
    borderRadius:8,
    padding:12,
    marginBottom:12,
  },

  botaoSalvar:{
    backgroundColor:"#E50914",
    padding:15,
    borderRadius:8,
    alignItems:"center",
    marginTop:10,
  },

  textoBotao:{
    color:"#FFF",
    fontWeight:"bold",
    fontSize:16,
  },

  botaoCancelar:{
    marginTop:15,
    alignItems:"center",
  },

  textoCancelar:{
    color:"#FFF",
    fontSize:16,
  },

});
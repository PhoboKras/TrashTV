import React from "react";
import {Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView} from "react-native";

import PlayerYoutube from "./PlayerYoutube";

export default function ModalFilme({visible, filme, fechar, editar, excluir}) {

  if (!filme) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
    >

      <View style={styles.overlay}>

        <View style={styles.container}>

          <ScrollView showsVerticalScrollIndicator={false}>

            <Text style={styles.titulo}>
              {filme.titulo}
            </Text>

            <Text style={styles.info}>
              {filme.categoria} • {filme.ano}
            </Text>

            <Text style={styles.nota}>
              ⭐ {filme.nota}
            </Text>

            <Text style={styles.descricao}>
              {filme.descricao}
            </Text>

            <PlayerYoutube
              videoId={filme.trailer}
            />

            <TouchableOpacity
              style={styles.botaoEditar}
              onPress={() => {

                fechar();
                editar(filme);

              }}
            >

              <Text style={styles.textoBotao}>
                ✏ Editar
              </Text>

            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoExcluir}
              onPress={() => {

                excluir(filme.id);
                fechar();

              }}
            >

              <Text style={styles.textoBotao}>
                🗑 Excluir
              </Text>

            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoFechar}
              onPress={fechar}
            >

              <Text style={styles.textoBotao}>
                Fechar
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
    fontSize:26,
    fontWeight:"bold",
    marginBottom:10,
  },

  info:{
    color:"#AAA",
    fontSize:16,
    marginBottom:10,
  },

  nota:{
    color:"#FFD700",
    fontSize:18,
    marginBottom:15,
  },

  descricao:{
    color:"#DDD",
    fontSize:15,
    lineHeight:22,
    marginBottom:20,
  },

  botaoEditar:{
    backgroundColor:"#007AFF",
    padding:14,
    borderRadius:8,
    alignItems:"center",
    marginTop:20,
  },

  botaoExcluir:{
    backgroundColor:"#E50914",
    padding:14,
    borderRadius:8,
    alignItems:"center",
    marginTop:10,
  },

  botaoFechar:{
    backgroundColor:"#444",
    padding:14,
    borderRadius:8,
    alignItems:"center",
    marginTop:10,
  },

  textoBotao:{
    color:"#FFF",
    fontSize:16,
    fontWeight:"bold",
  },

});
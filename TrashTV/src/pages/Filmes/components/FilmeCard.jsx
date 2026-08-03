import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function FilmeCard({ filme, abrirModal }) {

  return (
    <TouchableOpacity style={styles.card} onPress={abrirModal}>

      <View style={styles.poster}>
        <Text style={styles.posterTexto}>
          🎬
        </Text>
      </View>

      <Text style={styles.titulo}>
        {filme.titulo}
      </Text>

      <Text style={styles.info}>
        {filme.categoria} • {filme.ano}
      </Text>

      <Text style={styles.nota}>
        ⭐ {filme.nota}
      </Text>

    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({

  card:{
    width:"48%",
    backgroundColor:"#181818",
    borderRadius:12,
    padding:12,
    marginBottom:18,
  },

  poster:{
    height:170,
    backgroundColor:"#292929",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
  },

  posterTexto:{
    fontSize:40,
  },

  titulo:{
    color:"#FFF",
    fontSize:16,
    fontWeight:"bold",
    marginTop:10,
  },

  info:{
    color:"#AAA",
    marginTop:5,
  },

  nota:{
    color:"#E50914",
    marginTop:5,
    fontWeight:"bold",
  },

});
import react from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function Home() {

    return (
        <ScrollView style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        >

            <Text style={styles.titulo}> 🎬🗑️Trash Tv</Text>
            <Text style={styles.subtitulo}>Bem-vindo ao Trash Tv</Text>

        <View style={styles.banner}>
            
        <Text style={styles.bannerTitulo}>
          Os piores filmes, as maiores pérolas!
        </Text>
        
        <Text style={styles.bannerTexto}>
          Descubra clássicos trash, filmes de terror B, ação exagerada,
          ficção científica duvidosa e muito mais.
        </Text>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>Explorar</Text>
        </TouchableOpacity>
      </View>
 

      <View style={styles.secao}>
        <Text style={styles.secaoTitulo}>Filmes em Destaque 🔥</Text>
        <Text style={styles.secaoTexto}>Confira os melhores filmes do momento!</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Serpentes a Bordo 🐍(2006)</Text>
        <Text style={styles.cardTexto}>Considerado um dos filmes mais "tão ruim que é bom" da história</Text>
      </View>

       <View style={styles.card}>
        <Text style={styles.cardTitulo}>Dominio Alien 👽(1996)</Text>
        <Text style={styles.cardTexto}>Considerado um dos filmes mais "tão ruim que é bom" da história</Text>
      </View>






        

.
        





        </ScrollView>
    )




}

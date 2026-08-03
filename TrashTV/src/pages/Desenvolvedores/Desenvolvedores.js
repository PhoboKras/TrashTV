import React from "react";
import {View, Text, StyleSheet, ScrollView, Image} from "react-native";


export default function Desenvolvedores(){

const devs = [

  {
    nome:"Ricardo",
    foto:"https://link-da-foto.com/ricardo.jpg",
    cargo:"O maior farmador de aura 67",
    descricao:
    "Arquiteto supremo do Trash TV. Quando não está codando, está farmando aura em silêncio e aparecendo com uma solução que ninguém esperava."
  },


  {
    nome:"Juan",
    foto:"https://link-da-foto.com/juan.jpg",
    cargo:"Cria de Alphaville",
    descricao:
    "Especialista em ideias diferenciadas e residente oficial do luxo duvidoso. Dizem que ele nasceu com Wi-Fi 5G e uma opinião sobre tudo."
  },


  {
    nome:"Agnes",
    foto:"https://link-da-foto.com/agnes.jpg",
    cargo:"Guardião das ideias aleatórias",
    descricao:
    "Transforma qualquer ideia estranha em algo funcional. A pessoa responsável por lembrar que o projeto precisa continuar fazendo sentido."
  },


  {
    nome:"João Vitor",
    foto:"https://link-da-foto.com/joao.jpg",
    cargo:"Mestre das linhas de código",
    descricao:
    "Vulgo 'Espanca Git'. Seu poder especial é abrir o código antigo e dizer: 'dá para melhorar isso'."
  }

];


return(

<ScrollView style={styles.container}>


<View style={styles.header}>

<Text style={styles.logo}>
🎬🗑️ Trash TV
</Text>


<Text style={styles.title}>
Quem fez essa obra duvidosa?
</Text>


<Text style={styles.subtitle}>
Uma equipe pequena, mas com aura suficiente para sobreviver aos piores filmes.
</Text>

</View>



{
devs.map((dev,index)=>(

<View 
key={index}
style={styles.card}
>


<Image
source={{
uri:dev.foto
}}
style={styles.avatar}
/>


<View style={styles.info}>


<Text style={styles.name}>
{dev.nome}
</Text>


<Text style={styles.role}>
{dev.cargo}
</Text>


<Text style={styles.description}>
{dev.descricao}
</Text>


</View>


</View>

))
}



</ScrollView>

)

}
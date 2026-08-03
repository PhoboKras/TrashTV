import React, {useState} from "react";

import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from "react-native";


import {adicionarAssinatura} from "../../../storage/AssinaturaStorage";


export default function AdicionarAssinatura({fecharModal}){


    const [nome,setNome] = useState("");

    const [valor,setValor] = useState("");

    const [vencimento,setVencimento] = useState("");

    async function salvar(){

        if(!nome || !valor || !vencimento){

            Alert.alert(
                "Atenção",
                "Preencha todos os campos"
            );

            return;

        }


        const novaAssinatura = {

            id:Date.now().toString(),

            nome,

            valor,

            vencimento,

            status:"Ativa"

        };



        await adicionarAssinatura(
            novaAssinatura
        );



        fecharModal();

    }


    return(

        <View style={styles.container}>


            <Text style={styles.titulo}>
                Nova Assinatura
            </Text>


            <Text style={styles.logo}>
                TRASH TV
            </Text>




            <TextInput

                style={styles.input}

                placeholder="Nome do plano"

                placeholderTextColor="#777"

                value={nome}

                onChangeText={setNome}

            />



            <TextInput

                style={styles.input}

                placeholder="Valor mensal"

                placeholderTextColor="#777"

                keyboardType="numeric"

                value={valor}

                onChangeText={setValor}

            />



            <TextInput

                style={styles.input}

                placeholder="Dia da cobrança"

                placeholderTextColor="#777"

                keyboardType="numeric"

                value={vencimento}

                onChangeText={setVencimento}

            />



            <TouchableOpacity

                style={styles.botao}

                onPress={salvar}

            >

                <Text style={styles.textoBotao}>
                    Salvar
                </Text>

            </TouchableOpacity>


        </View>

    )

}




const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#101010",
        padding:20
    },


    titulo:{
        color:"#FFF",
        fontSize:28,
        fontWeight:"bold"
    },


    logo:{
        color:"#FF0055",
        marginBottom:30,
        marginTop:10
    },


    input:{
        backgroundColor:"#1E1E1E",
        height:55,
        borderRadius:12,
        paddingHorizontal:15,
        color:"#FFF",
        marginBottom:15
    },


    botao:{
        backgroundColor:"#FF0055",
        height:55,
        borderRadius:12,
        justifyContent:"center",
        alignItems:"center"
    },


    textoBotao:{
        color:"#FFF",
        fontWeight:"bold"
    }

});
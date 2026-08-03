import React, {useCallback, useState} from "react";

import {View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, Modal} from "react-native";

import {useFocusEffect} from "@react-navigation/native";

import {editarAssinatura} from "../../storage/AssinaturaStorage";
import {excluirAssinatura} from "../../storage/AssinaturaStorage";
import {buscarAssinatura} from "../../storage/AssinaturaStorage";

import AdicionarAssinatura from "./components/AdicionarAssinatura";



export default function Assinaturas(){

    const [assinaturas,setAssinaturas] = useState([]);

    const [modalAdicionar,setModalAdicionar] = useState(false);



    async function carregarAssinaturas(){

        const dados = await buscarAssinaturas();

        setAssinaturas(dados);

    }



    useFocusEffect(

        useCallback(()=>{

            carregarAssinaturas();

        },[])

    );


    function confirmarExclusao(id){


        Alert.alert(

            "Excluir assinatura",

            "Deseja remover essa assinatura?",

            [

                {
                    text:"Cancelar",
                    style:"cancel"
                },

                {

                    text:"Excluir",

                    style:"destructive",

                    onPress: async()=>{

                        await excluirAssinatura(id);

                        carregarAssinaturas();

                    }

                }

            ]

        );

    }


    function renderItem({item}){

        return(

            <View style={styles.card}>


                <View>


                    <Text style={styles.logo}>
                        TRASH TV
                    </Text>


                    <Text style={styles.nome}>
                        {item.nome}
                    </Text>


                    <Text style={styles.valor}>
                        R$ {item.valor}/mês
                    </Text>


                    <Text style={styles.texto}>
                        Cobrança dia {item.vencimento}
                    </Text>


                    <Text style={styles.status}>
                        ● {item.status}
                    </Text>


                </View>



                <TouchableOpacity

                    style={styles.excluir}

                    onPress={()=>
                        confirmarExclusao(item.id)
                    }

                >

                    <Text style={styles.textoBotao}>
                        X
                    </Text>


                </TouchableOpacity>



            </View>

        )

    }


    return(

        <View style={styles.container}>

            <Text style={styles.titulo}>
                Assinaturas
            </Text>

            <Text style={styles.subtitulo}>
                Gerencie sua Trash TV
            </Text>


            <TouchableOpacity

                style={styles.adicionar}

                onPress={()=>setModalAdicionar(true)}

            >

                <Text style={styles.textoAdicionar}>
                    + Nova Assinatura
                </Text>

            </TouchableOpacity>





            <FlatList

                data={assinaturas}

                keyExtractor={
                    item=>item.id
                }

                renderItem={renderItem}

            />






            <Modal

                visible={modalAdicionar}

                animationType="slide"

                onRequestClose={()=>
                    setModalAdicionar(false)
                }

            >


                <AdicionarAssinatura

                    fecharModal={()=>{

                        setModalAdicionar(false);

                        carregarAssinaturas();

                    }}

                />


            </Modal>




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


    subtitulo:{
        color:"#888",
        marginTop:5,
        marginBottom:20
    },


    adicionar:{
        backgroundColor:"#FF0055",
        height:50,
        borderRadius:12,
        justifyContent:"center",
        alignItems:"center",
        marginBottom:20
    },


    textoAdicionar:{
        color:"#FFF",
        fontWeight:"bold",
        fontSize:16
    },


    card:{
        backgroundColor:"#1E1E1E",
        borderRadius:18,
        padding:18,
        marginBottom:15,
        flexDirection:"row",
        justifyContent:"space-between"
    },


    logo:{
        color:"#FF0055",
        fontWeight:"bold"
    },


    nome:{
        color:"#FFF",
        fontSize:22,
        fontWeight:"bold"
    },


    valor:{
        color:"#FFF",
        marginTop:5
    },


    texto:{
        color:"#AAA"
    },


    status:{
        color:"#4CAF50",
        marginTop:8
    },


    excluir:{
        backgroundColor:"#FF0055",
        width:35,
        height:35,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center"
    },


    textoBotao:{
        color:"#FFF",
        fontWeight:"bold"
    }


});
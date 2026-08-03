import React, {useCallback, useState} from "react";
import {View, Text, FlatList, TouchableOpacity, Image, StyleSheet} from "react-native";
import {useFocusEffect} from "@react-navigation/native";

import {buscarAssinaturas, adicionarAssinatura, excluirAssinatura} from "../../storage/AssinaturaStorage";


const PLANOS = [
    {
        id: "shudder",
        nome: "Shudder",
        preco: "6,99",
        info: "Streaming dedicado a filmes e séries de terror, com curadoria de fãs e conteúdo exclusivo.",
        logo: { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSxiWJmlhyqkNAmhmkh7dfgoFgg-uJ7ditXH4vQ3o57A&s=10" },
    },
    {
        id: "screambox",
        nome: "Screambox",
        preco: "6,99",
        info: "Mais de 1000 filmes de terror: clássicos, slashers, culto e originais exclusivos.",
        logo: { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxD10Tv0jPm6peqvZhm764kxUZ5T89NYA8x9ZXOQojpw&s=10" },
    },
    {
        id: "shout",
        nome: "Shout! TV",
        preco: "3,99",
        info: "Filmes e séries cult e clássicas, com canais ao vivo 24/7 sem anúncios.",
        logo: { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnjpWesXC02MDpUR6iDKhWKiJezqsyyd7MhK16rDxmWA&s=10" },
    },
];

export default function Assinaturas() {

    const [assinados, setAssinados] = useState([]);
    const [verMinhasAssinaturas, setVerMinhasAssinaturas] = useState(false);

    async function carregarAssinaturas() {
        const dados = await buscarAssinaturas();
        setAssinados(dados.map(item => item.id));
    }

    useFocusEffect(
        useCallback(() => {
            carregarAssinaturas();
        }, [])
    );

    async function handleAssinar(plano) {
        await adicionarAssinatura({
            id: plano.id,
            nome: plano.nome,
            valor: plano.preco,
            status: "Ativa",
        });
        carregarAssinaturas();
    }

    async function handleCancelar(id) {
        await excluirAssinatura(id);
        carregarAssinaturas();
    }

    const listaExibida = verMinhasAssinaturas
        ? PLANOS.filter(plano => assinados.includes(plano.id))
        : PLANOS;

    function renderItem({item}) {
        const estaAssinado = assinados.includes(item.id);

        return (
            <View style={styles.card}>
                <Image source={item.logo} style={styles.logo} resizeMode="contain" />

                <View style={styles.info}>
                    <Text style={styles.nome}>{item.nome}</Text>
                    <Text style={styles.descricao}>{item.info}</Text>
                    <Text style={styles.preco}>R$ {item.preco}/mês</Text>

                    {estaAssinado && (
                        <Text style={styles.status}>● Assinatura ativa</Text>
                    )}
                </View>

                <TouchableOpacity
                    style={[
                        styles.botao,
                        estaAssinado ? styles.botaoCancelar : styles.botaoAssinar,
                    ]}
                    onPress={() =>
                        estaAssinado ? handleCancelar(item.id) : handleAssinar(item)
                    }
                >
                    <Text style={styles.textoBotao}>
                        {estaAssinado ? "Cancelar" : "Assinar"}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Assinaturas</Text>
            <Text style={styles.subtitulo}>
                {verMinhasAssinaturas
                    ? "Suas assinaturas ativas"
                    : "Escolha seus streamings de terror"}
            </Text>

            <View style={styles.tabs}>
                <TouchableOpacity
                    style={[styles.tabBotao, !verMinhasAssinaturas && styles.tabAtiva]}
                    onPress={() => setVerMinhasAssinaturas(false)}
                >
                    <Text style={[styles.tabTexto, !verMinhasAssinaturas && styles.tabTextoAtivo]}>
                        Planos
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.tabBotao, verMinhasAssinaturas && styles.tabAtiva]}
                    onPress={() => setVerMinhasAssinaturas(true)}
                >
                    <Text style={[styles.tabTexto, verMinhasAssinaturas && styles.tabTextoAtivo]}>
                        Minhas Assinaturas
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={listaExibida}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    verMinhasAssinaturas ? (
                        <Text style={styles.vazio}>
                            Você ainda não assinou nenhum plano
                        </Text>
                    ) : null
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#101010",
        padding: 20
    },
    titulo: {
        color: "#FFF",
        fontSize: 28,
        fontWeight: "bold"
    },
    subtitulo: {
        color: "#888",
        marginTop: 5,
        marginBottom: 16
    },
    tabs: {
        flexDirection: "row",
        backgroundColor: "#1E1E1E",
        borderRadius: 12,
        padding: 4,
        marginBottom: 20,
    },
    tabBotao: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: "center",
    },
    tabAtiva: {
        backgroundColor: "#FF0055",
    },
    tabTexto: {
        color: "#AAA",
        fontWeight: "bold",
        fontSize: 14,
    },
    tabTextoAtivo: {
        color: "#FFF",
    },
    card: {
        backgroundColor: "#1E1E1E",
        borderRadius: 18,
        padding: 18,
        marginBottom: 15,
    },
    logo: {
        width: 80,
        height: 80,
        borderRadius: 12,
        marginBottom: 12,
        backgroundColor: "#000",
    },
    info: {
        marginBottom: 14,
    },
    nome: {
        color: "#FFF",
        fontSize: 22,
        fontWeight: "bold"
    },
    descricao: {
        color: "#AAA",
        marginTop: 6,
        lineHeight: 20,
    },
    preco: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10,
    },
    status: {
        color: "#4CAF50",
        marginTop: 8
    },
    botao: {
        height: 46,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    botaoAssinar: {
        backgroundColor: "#FF0055",
    },
    botaoCancelar: {
        backgroundColor: "#333",
        borderWidth: 1,
        borderColor: "#FF0055",
    },
    textoBotao: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 16
    },
    vazio: {
        color: "#666",
        textAlign: "center",
        marginTop: 40
    },
});
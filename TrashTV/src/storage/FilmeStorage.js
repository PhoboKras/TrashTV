import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEYS } from "./StorageKeys";
import filmesIniciais from "../Data/Filmes";

// Carrega os filmes.
// Se for a primeira execução, salva os filmes do Data no AsyncStorage.
export async function listarFilmes() {
  try {
    const dados = await AsyncStorage.getItem(STORAGE_KEYS.FILMES);

    if (dados) {
      return JSON.parse(dados);
    }

    await AsyncStorage.setItem(
      STORAGE_KEYS.FILMES,
      JSON.stringify(filmesIniciais)
    );

    return filmesIniciais;
  } catch (error) {
    console.log("Erro ao listar filmes:", error);
    return [];
  }
}

// Salva uma lista completa
export async function salvarFilmes(lista) {
  try {
    await AsyncStorage.setItem(
      STORAGE_KEYS.FILMES,
      JSON.stringify(lista)
    );
  } catch (error) {
    console.log("Erro ao salvar filmes:", error);
  }
}

// CREATE
export async function adicionarFilme(filme) {
  try {
    const filmes = await listarFilmes();

    const novoFilme = {
      id: Date.now(),
      ...filme,
    };

    filmes.push(novoFilme);

    await salvarFilmes(filmes);

    return novoFilme;
  } catch (error) {
    console.log("Erro ao adicionar filme:", error);
  }
}

// READ por ID
export async function buscarFilme(id) {
  try {
    const filmes = await listarFilmes();

    return filmes.find(f => f.id === id);
  } catch (error) {
    console.log("Erro ao buscar filme:", error);
    return null;
  }
}

// UPDATE
export async function editarFilme(filmeAtualizado) {
  try {
    const filmes = await listarFilmes();

    const novaLista = filmes.map(f =>
      f.id === filmeAtualizado.id
        ? filmeAtualizado
        : f
    );

    await salvarFilmes(novaLista);
  } catch (error) {
    console.log("Erro ao editar filme:", error);
  }
}

// DELETE
export async function excluirFilme(id) {
  try {
    const filmes = await listarFilmes();

    const novaLista = filmes.filter(f => f.id !== id);

    await salvarFilmes(novaLista);
  } catch (error) {
    console.log("Erro ao excluir filme:", error);
  }
}

// Limpa todos os filmes (útil para testes)
export async function limparFilmes() {
  try {
    await AsyncStorage.removeItem(STORAGE_KEYS.FILMES);
  } catch (error) {
    console.log(error);
  }
}
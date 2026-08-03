import AsyncStorage from "@react-native-async-storage/async-storage";


const STORAGE_KEY = "@trash_tv_assinaturas";


// Buscar todas as assinaturas
export async function buscarAssinaturas(){

    try{

        const dados = await AsyncStorage.getItem(
            STORAGE_KEY
        );


        if(dados){

            return JSON.parse(dados);

        }

        return [];


    }catch(error){

        console.log(
            "Erro ao buscar assinaturas:",
            error
        );

        return [];

    }

}


// Salvar lista completa
export async function salvarAssinaturas(lista){

    try{

        await AsyncStorage.setItem(

            STORAGE_KEY,

            JSON.stringify(lista)
        );

    }catch(error){

        console.log(
            "Erro ao salvar assinaturas:",
            error
        );

    }

}


// Criar nova assinatura
export async function adicionarAssinatura(assinatura){

    try{

        const assinaturas = await buscarAssinaturas();

        assinaturas.push(assinatura);

        await salvarAssinaturas(
            assinaturas
        );



    }catch(error){

        console.log(
            "Erro ao adicionar assinatura:",
            error
        );

    }

}



// Editar assinatura existente
export async function editarAssinatura(
    id,
    dadosAtualizados
){

    try{

        const assinaturas = await buscarAssinaturas();

        const novaLista = assinaturas.map(item =>

            item.id === id

            ? dadosAtualizados

            : item

        );

        await salvarAssinaturas(
            novaLista
        );

    }catch(error){

        console.log(
            "Erro ao editar assinatura:",
            error
        );

    }

}






// Excluir assinatura
export async function excluirAssinatura(id){

    try{


        const assinaturas = await buscarAssinaturas();


        const novaLista = assinaturas.filter(item =>
            item.id !== id

        );

        await salvarAssinaturas(
            novaLista
        );



    }catch(error){
        console.log(
            "Erro ao excluir assinatura:",
            error
        );
    }
}
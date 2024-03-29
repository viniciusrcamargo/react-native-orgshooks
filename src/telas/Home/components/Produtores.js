import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { carregaProdutores } from "../../../servicos/carregaDados";

export default function Produtores({ topo: Topo}) {
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    useEffect(() => {//esse método tem comportamento semelando ao componentDidMount
        const retorno = carregaProdutores();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    }, []);

    const TopoLista = () => {
        return <>
            <Topo />
            <Text style={estilos.titulo}>{ titulo }</Text>
          </> 
    }
       
    
    
    return <FlatList 
        data={lista}
        renderItem={({item: {nome}}) => <View><Text>{nome}</Text></View>}
        keyExtractor={({nome}) => nome}
        ListHeaderComponent={TopoLista}
        />
}

estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646',
    },
});
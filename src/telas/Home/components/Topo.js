import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";


import  { carregaTopo } from "../../../servicos/carregaDados";
import logo from "../../../assets/logo.png";

 class Topo extends React.Component {
    state = {//objeto que armazena o estado da aplicação
        topo: {//objeto que armazena o estado do topo
            boasVindas: '',
            legenda: '',
        },
    }   
    
    atualizaTopo(){
        const retorno = carregaTopo();//chama a função carregaTopo
        this.setState({topo: retorno});//atualiza o estado do topo
    }
    
    componentDidMount() {//método que é chamado quando o componente é montado
        this.atualizaTopo();//chama a função atualizaTopo
    }
    render() {
        return <View style={estilos.topo}>
                <Image style={estilos.image} source={logo} />
                <Text style={estilos.boasVindas}>{this.state.topo.boasVindas}</Text>
                <Text style={estilos.legenda}>{this.state.topo.legenda}</Text>
            </View>
    }
}

const estilos = StyleSheet.create({
    topo:{
        backgroundColor: "#F6F6F5",
        padding: 16,
    },
    image: {
        width: 70,
        height: 28,
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        fontWeight: 'bold',
        lineHeight: 42,},
        color: '#464646',
    legenda: {
        fontSize: 16,
        lineHeight: 26,
        color: '#A3A3A3',
    },
});

export default Topo;
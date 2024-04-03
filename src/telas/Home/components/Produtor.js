import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";


export default function Produtor({ nome, imagem, distancia, estrelas }) {
    return <View style={estilos.cartao}>
             <Image source={imagem} style={estilos.imagem} accessibilityLabel={nome}/>
             <View style={estilos.informacoes}>
                <Text style={estilos.nome}>{nome}</Text>
                <Text style={estilos.distancia}>{distancia}</Text>
             </View>
           </View>
}

const estilos = StyleSheet.create({
   cartao:{
      backgroundColor: '#F6F6F6',
      marginVertical: 16,
      marginHorizontal: 16,
      borderRadius: 6,
      flexDirection: "row",
      elevation: 4, // Sombra no Android
      shadowColor: "#000", // Sombra no iOS
      shadowOffset: {// Sombra no iOS
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25, // Sombra no iOS
      shadowRadius: 2.62, // Sombra no iOS

   },
   imagem:{
      width: 48,
      height: 48,
      borderRadius: 6,
      marginVertical: 16,
      marginLeft: 16,
   },
   informacoes:{
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      marginLeft: 8,
      marginVertical: 16,
      marginRight: 16,
   },
   nome:{
      fontSize: 14,
      fontWeight: "bold",
      lineHeight: 22,
   },
   distancia:{
      fontSize: 12,
      lineHeight: 19,
   }
});
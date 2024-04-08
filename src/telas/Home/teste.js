import React from "react";
import { Text, StyleSheet} from "react-native";

function App() {
  return (
    <View style={estilos.tela}>
        <Text>Meu App</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
  }
});

export default App;
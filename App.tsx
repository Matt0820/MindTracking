//importando itens importantes do projeto

import React from "react";
import { View,StyleSheet,Text } from "react-native";
import { SafeAreaProvider,SafeAreaView } from "react-native-safe-area-context";

//importando conteudo basico do projeto como cores e etc
import { Cores } from "./src/theme/colors";
import Header from "./src/components/header";
import ContainerDiario from "./src/components/container";

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Header />
      <Text style={styles.descricao}>Seja bem-vindo(a) ao MindTracking! um app que te ajuda no controle emocional. Use-o como seu diario pessoal, ou apenas deixe lembretes/ coisas importantes marcadas.</Text>
      <ContainerDiario />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Cores.background,
  },
  descricao: {
    color: Cores.textSecondary,
    textAlign: "center",
    margin: 10,
    fontSize: 11
  }
});
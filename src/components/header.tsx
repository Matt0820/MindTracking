import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Cores } from "../theme/colors";

export default function Header() {
  return (
    //the Text tag still in there until i get a another prop, maybe a image :D
    <SafeAreaView style={estilos.container}>
      <Text style={estilos.texto}>MindTracking</Text>
      <View style={estilos.nav}>
        <TouchableOpacity>
          <Text style={estilos.textoNav}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={estilos.textoNav}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={estilos.textoNav}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: Cores.primary,
    alignItems: "center",
    textAlign: "center",
  },
  texto: {
    color: Cores.secondary,
    fontSize: 20,
    margin: 30,
    fontWeight: "bold"
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%", // Um pouco de espaço nas laterais para não colar nas bordas
    marginTop: 10, // Apenas margem no topo para separar do título
    backgroundColor: Cores.secondary,
    padding: 10,
    borderRadius: 8, // Um pouco mais arredondado para um visual mais suave,
  },
  textoNav: {
    color: Cores.primary,
    fontSize: 16,
    fontWeight: "bold",

  },
});

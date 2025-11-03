import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Cores } from "../theme/colors";
import Card from "./card";

export default function ContainerDiario() {
  return (
    <View style={estilos.container}>
      <TouchableOpacity>
        <View style={estilos.botaoAdd}>
          <Text style={estilos.textoBotao}>+</Text>
        </View>
      </TouchableOpacity>
      <Card />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: Cores.secondary,
    margin: 15,
    height: "50%",
    borderRadius: 11,
    alignItems: "center",
  },
  textoBotao: {
    textAlign: "center",
    color: Cores.textPrimary,
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
  },
  botaoAdd: {
    backgroundColor: Cores.primary,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 11,
  },
});

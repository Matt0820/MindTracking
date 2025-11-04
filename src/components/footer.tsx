import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Cores } from "../theme/colors";

export default function FooterApp() {
    return (
        <View style={estilos.container}>
            <Text style={estilos.texto}>Footer</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: Cores.primary,
        alignItems: "center",
        textAlign: "center",
        justifyContent:'center',
        flex:1
    },
    texto : {
        color: Cores.secondary,
        fontSize: 20,
        textAlign:'center',
        fontWeight:'bold'
    }
})
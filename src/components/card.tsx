import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Cores } from "../theme/colors";

export default function Card() {
    return (
        <View style={estilos.container}>
            <Text style={estilos.titleCard}>Title Example</Text>
            <Text style={estilos.textoCard} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. At nostrum quaerat omnis fugiat eveniet debitis voluptates ad quibusdam error ipsam nisi repellendus hic, doloremque distinctio quasi nulla? Saepe, minima eius?</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: Cores.surface,
        margin:5,
        padding:10,
        borderRadius:11
    },
    textoCard: {
        color:Cores.textPrimary,
        textAlign:'left'
    },
    titleCard: {
        color: Cores.primary,
        fontSize:20,
        fontWeight:'bold',
        margin:15,
        marginLeft:0
    }
})
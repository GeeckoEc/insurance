import React from "react";
import { AppColors } from "../presentation/theme/AppTheme";
import { Image, KeyboardType, StyleSheet, Text, TextInput, View } from "react-native";

interface Props {
    icono:          string,
    etiqueta:       string,
    consejo:        string,
    valor:          string,
    propiedad:      string,     
    teclado:        KeyboardType,
    entradaSegura:  boolean,
    onChangeText:   (propiedad: string, valor: any) => void
}

export const Campo = ({icono, etiqueta, consejo, valor, propiedad, teclado, entradaSegura, onChangeText}:Props) => {
    return (
        <View 
            style={estilos.EstiloContenedor}
        >
            <View style={estilos.EstiloGrupo}>
                <Image 
                    style={estilos.EstiloIcono} 
                    source={require("../../images/icons/" + icono + ".svg")}
                />
                <Text style={estilos.EstiloEtiqueta}>
                    {etiqueta}
                </Text>
            </View>
            <TextInput 
                style           =   {estilos.EstiloCampo} 
                placeholder     =   {consejo}
                value           =   {valor}
                secureTextEntry =   {entradaSegura}
                keyboardType    =   {teclado}
                onChangeText    =   {(texto) => onChangeText(propiedad, texto)}
            >
            </TextInput>
        </View>
    )
}

const estilos = StyleSheet.create({
    EstiloContenedor:{
        marginTop:          0,
        marginBottom:       10,
    }, 
    EstiloGrupo:{
        paddingTop:         3,
        paddingBottom:      3,
        flexDirection:      "row",
    },
    EstiloEtiqueta:{
        paddingTop:         2,
    },
    EstiloCampo:{
        padding:            10,
        backgroundColor:    '#FFFFFF',
        color:              '#000000',
        textAlign:          'center', 
        marginBottom:       10,       
        borderColor:        AppColors.info,
        borderStyle:        'solid',
        borderWidth:        1.5,
        borderRadius:       5,
    },
    EstiloIcono:{
        height:             24,
        width:              24,
        marginEnd:          10,
    }
})
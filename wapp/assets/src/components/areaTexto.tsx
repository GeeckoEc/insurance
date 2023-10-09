import React from "react";
import { AppColors } from "../presentation/theme/AppTheme";
import { Image, StyleSheet, Text, TextInput, View, } from "react-native";

interface Props {
    icono:          string,
    etiqueta:       string,
    consejo:        string,
    valor:          string,
    propiedad:      string,     
    onChangeText:   (propiedad: string, valor: any) => void
}

export const AreaTexto = ({icono, etiqueta, consejo, valor, propiedad, onChangeText}:Props) => {
    return(
        <View style={Estilos.Contenendor}>
            <View style={Estilos.Grupo}>
                <Image 
                    style={Estilos.Icono}
                    source={require("../../images/icons/" + icono + ".svg")}
                />
                <Text style={Estilos.Etiqueta}>{etiqueta}</Text>
            </View>
            <TextInput
                multiline
                numberOfLines={6}
                style={Estilos.AreaTexto}
                placeholder     =   {consejo}
                value           =   {valor}
                secureTextEntry =   {false}
                keyboardType    =   {'default'}
                onChangeText    =   {(texto) => onChangeText(propiedad, texto)}
            />
        </View>
    )
}

const Estilos = StyleSheet.create({
    Contenendor: {
        flex:                   1,
    },
    Grupo: {
        flexDirection:          'row',
    }, 
    Etiqueta: {
        marginTop:              2,
    },
    Icono:  {
        width:                  24,
        height:                 24,
    },
    AreaTexto:{
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
})
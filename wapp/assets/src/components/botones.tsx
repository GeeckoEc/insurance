import React from 'react';
import { TouchableOpacity, StyleSheet, Image, Text, Pressable } from 'react-native';
import { AppColors } from '../presentation/theme/AppTheme';

interface Props {
    icono:       string,
    texto:       string,
    onPress:    () => void
}

export const BotonPrimario = ({icono, texto, onPress}:Props) => {
    return (
        <Pressable 
            style={estilos.EstiloBotonPrimary}
            onPress={ () => onPress()}
        >
            <Image 
                style={estilos.EstiloIcono}
                source={require("../../images/icons/" + icono + ".svg")}
            />
            <Text 
                style={estilos.EstiloTexto}
            >
                {texto}
            </Text>
        </Pressable>
    )
}

export const BotonSecundario = ({icono, texto, onPress}:Props) => {
    return (
        <Pressable 
            style={estilos.EstiloBotonSecundario}
            onPress={ () => onPress()}
        >
            <Image 
                style={estilos.EstiloIcono}
                source={require("../../images/icons/" + icono + ".svg")}
            />
            <Text 
                style={estilos.EstiloTexto}
            >
                {texto}
            </Text>
        </Pressable>
    )
}

export const BotonPeligro = ({icono, texto, onPress}:Props) => {
    return (
        <Pressable 
            style={estilos.EstiloBotonPeligro}
            onPress={ () => onPress()}
        >
            <Image 
                style={estilos.EstiloIcono}
                source={require("../../images/icons/" + icono + ".svg")}
            />
            <Text 
                style={estilos.EstiloTexto}
            >
                {texto}
            </Text>
        </Pressable>
    )
}

const estilos = StyleSheet.create({
    EstiloBotonPrimary:{
        width:              '100%',
        backgroundColor:    AppColors.primary,
        padding:            10, 
        marginVertical:     5,
        marginHorizontal:   5,
        borderRadius:       5,
        flexDirection:      'row',
        flex:               1,
        justifyContent:     'center',
        minWidth:           140,
    },
    EstiloBotonSecundario:{
        width:              '100%',
        backgroundColor:    AppColors.secondary,
        padding:            10, 
        justifyContent:     'center',
        marginVertical:     5,
        marginHorizontal:   5,
        borderRadius:       5,
        flexDirection:      'row', 
        flex:               1,
        minWidth:           140,
    },
    EstiloBotonPeligro:{
        width:              '100%',
        backgroundColor:    AppColors.danger,
        padding:            10, 
        justifyContent:     'center',
        marginVertical:     5,
        marginHorizontal:   5,
        borderRadius:       5,
        flexDirection:      'row',
        flex:               1,
        borderStyle:        'solid',
        borderColor:        '#FFFFFF',
        borderWidth:        1,
        minWidth:           140,
    },
    EstiloTexto:{
        color:              '#FFFFFF',
        textAlign:          'center',
        marginStart:        10,
        fontWeight:         '700',
        textTransform:      'uppercase',
        marginTop:          3,
    },
    EstiloIcono:{ 
        height:             24,
        width:              24,
        tintColor:          '#FFFFFF',
    }
})
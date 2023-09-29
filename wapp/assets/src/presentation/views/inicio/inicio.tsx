import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppColors } from '../../theme/AppTheme';
import { BotonPrimario } from '../../../components/botones';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../App';

import { View, Text, StyleSheet } from 'react-native';

export const InicioScreen = () => {
    const Navegacion = useNavigation<StackNavigationProp<RootStackParamList>>();
    <StatusBar style='auto'/>
    return (
        <View style={Estilos.Contenedor}>
            <View style={Estilos.Menu}>
                <Text style={Estilos.Titulo}>Menu</Text>
                <BotonPrimario
                    icono='users-solid'
                    texto='Clientes'
                    onPress={()=>Navegacion.navigate('ListaClientesScreen')}
                />
            </View>
        </View>        
    )
}

const Estilos = StyleSheet.create({
    Contenedor:{
        flex:               1,
        backgroundColor:    AppColors.background,
        justifyContent:     'center',
    },
    Menu:{
        width:              350,
        padding:            30,
        position:           'absolute',
        left:               '50%',
        marginLeft:         -175,
        backgroundColor:    AppColors.box,
        borderColor:        AppColors.info,
        borderStyle:        'solid',
        borderWidth:        1,
        borderRadius:       5,
    },
    Titulo:{
        textAlign:          'center',
        textTransform:      'uppercase',
        fontSize:           30,
        marginBottom:       20,
        color:              AppColors.title
    }
})
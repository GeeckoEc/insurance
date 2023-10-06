import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../../App";
import { AppColors } from "../../theme/AppTheme";
import { BotonPeligro, BotonPrimario, BotonSecundario } from "../../../components/botones";
import { Campo } from "../../../components/campos";
import { StyleSheet, Text, View } from "react-native";
import ViewModel from './EliminarReclamoViewModel';

export const EliminarReclamoScreen = () => {
    const Navegacion = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { id, onChange, eliminar } = ViewModel();
    return (
        <View style={Estilos.Contenedor}>
            <StatusBar style="auto"/>
            <View style={Estilos.Formulario}>
                <Text style={Estilos.Titulo}>Eliminar el cliente</Text>
                <Text style={Estilos.Descripcion}>¿Está seguro de que desea eliminar el cliente con el siguiente ID?</Text>
                <Campo 
                    icono           =   "id-badge-solid"
                    consejo         =   "El ID no puede quedar vacío."
                    etiqueta        =   "ID del Cliente"
                    teclado         =   "numeric"
                    valor           =   {id}
                    propiedad       =   "id"
                    entradaSegura   =   {false}
                    onChangeText    =   {onChange}
                />
                <BotonPeligro 
                    icono           =   "trash-alt-solid"
                    texto           =   "Eliminar"
                    onPress         =   {() => eliminar()}
                />
                <BotonSecundario 
                    icono           =   "times-solid"
                    texto           =   "Cancelar"
                    onPress         =   {() => Navegacion.navigate('ListaClientesScreen')}
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
    Formulario: {
        width:              400,
        padding:            30,
        position:           'absolute',
        left:               '50%',
        marginLeft:         -200,
        backgroundColor:    AppColors.box,
        borderColor:        AppColors.danger,
        borderWidth:        2,
        borderStyle:        'solid',
        borderRadius:       5,
    }, 
    Titulo: {
        textTransform:      'uppercase',
        fontSize:           30,
        color:              AppColors.title,
        marginBottom:       20,
        textAlign:          'center',
    },
    Descripcion: {
        color:              AppColors.text,
        marginBottom:       20,
        textAlign:          'center',
    }
})
import React from "react";
import { StatusBar } from "expo-status-bar";
import { AppColors } from "../../theme/AppTheme";
import { BotonPrimario, BotonSecundario } from "../../../components/botones";
import { Campo } from "../../../components/campos";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../../App";
import ViewModel from "./EditarClienteViewModel";
import { StyleSheet, Text, View } from "react-native";

export const EditarClienteScreen = () => {
    const Navegacion = useNavigation<StackNavigationProp<RootStackParamList>>();
    const {id, nombre, onChange, guardar} = ViewModel();
    return (
        <View style={Estilos.Contenendor}>
            <StatusBar style="auto"/>
            <View style={Estilos.Formulario}>
                <Text style={Estilos.Titulo}>Editar Cliente</Text>
                <Text style={Estilos.Descripción}>A continuación realice los cambios necesarios en la información del cliente.</Text>
                <Campo 
                    icono="id-badge-solid"
                    etiqueta="ID del Cliente"
                    consejo="No eliminar el ID del cliente."
                    valor={id}
                    propiedad="id"
                    teclado="default"
                    entradaSegura={false}
                    onChangeText={onChange}
                />
                <Campo 
                    icono="user"
                    etiqueta="Nombre Completo"
                    consejo="Ingrese el nombre del cliente."
                    valor={nombre}
                    propiedad="nombre"
                    teclado="default"
                    entradaSegura={false}
                    onChangeText={onChange}
                />
                <BotonPrimario 
                    icono="save"
                    texto="Guardar"
                    onPress={() => guardar()}
                />
                <BotonSecundario
                    icono="times-solid"
                    texto="Cancelar"
                    onPress={() => Navegacion.navigate('InicioScreen')}
                />
            </View>
        </View>
    );
}

const Estilos = StyleSheet.create({
    Contenendor: {
        flex:               1,
        backgroundColor:    AppColors.background,
        justifyContent:     'center',
    },
    Formulario: {
        width:              500,
        padding:            30,
        position:           'absolute',
        left:               '50%',
        marginLeft:         -250,
        backgroundColor:    AppColors.box,
        borderColor:        AppColors.info,
        borderStyle:        'solid',
        borderWidth:        1,
        borderRadius:       5,
    },
    Fondo: {
        width:              '100%',
        height:             '100%',
        opacity:            0.5,
    }, 
    Titulo: {
        color:              AppColors.title,
        textTransform:      'uppercase',
        textAlign:          'center',
        fontSize:           30,
        marginBottom:       20,
    },
    Descripción: {
        color:          AppColors.text,
        textAlign:      'center',
        marginVertical: 20,
    }
})
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { AppColors } from "../../theme/AppTheme";
import { BotonPrimario, BotonSecundario } from "../../../components/botones";
import { Campo } from "../../../components/campos";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../../App";
import ViewModel from "./EditarReclamoViewModel";
import { Button, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ApiInsurance } from "../../../../data/sources/remote/api/ApiInsurance";
import SelectDropdown from "react-native-select-dropdown";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { AreaTexto } from "../../../components/areaTexto";
import { Selector } from "../../../components/selector";
import { elementoSelector } from "../../../components/elementoSelector";

let polizas:any[] = []
let items:any[] = []
async function cargarPolizas() {
    polizas = await ApiInsurance.post('/polizas/listar')
    let i = 0
    let titulo = 'titulo'
    let id =    'key'
    polizas.data.data.forEach(element => {
        items.push(polizas.data.data[i].cliente + ' - ' + polizas.data.data[i].tipo)
        i=i+1
    });
}
cargarPolizas()

export const EditarReclamoScreen = () => {
    const Navegacion = useNavigation<StackNavigationProp<RootStackParamList>>();
    const {id, fecha, descripcion, poliza, onChange, editar} = ViewModel();
    
    return (
        <View style={Estilos.Contenendor}>
            <StatusBar style="auto"/>
            <View style={Estilos.Formulario}>
                <Text style={Estilos.Titulo}>Editar Reclamo</Text>
                <Text style={Estilos.Descripción}>A continuación realice los cambios necesarios en la información del reclamo.</Text>
                <Campo 
                    icono="id-badge-solid"
                    etiqueta="ID del Reclamo"
                    consejo="No eliminar el ID del reclamo."
                    valor={id}
                    propiedad="id"
                    teclado="default"
                    entradaSegura={false}
                    onChangeText={onChange}
                />
                <Campo
                    icono="calendar-solid"
                    etiqueta="Fecha (aaaa-mm-dd)"
                    consejo="Ingrese la fecha del reclamo."
                    teclado="numeric"
                    valor={fecha}
                    propiedad="fecha"
                    entradaSegura={false}
                    onChangeText={onChange}

                />
                <Selector
                    icono="file-signature-solid"
                    etiqueta="Póliza"
                    consejo="Seleccione una póliza a reclamar."
                    valor={poliza}
                    propiedad="poliza"
                    datos={items}
                    onSelect={onChange}
                />
                <AreaTexto
                    icono="comment"
                    etiqueta="Descripción"
                    consejo="Escriba la descripción."
                    valor={descripcion}
                    propiedad="descripcion"
                    onChangeText={onChange}
                />
                <BotonPrimario 
                    icono="save"
                    texto="Guardar"
                    onPress={() => editar()}
                />
                <BotonSecundario
                    icono="times-solid"
                    texto="Cancelar"
                    onPress={() => Navegacion.navigate('ListaReclamosScreen')}
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
    },
})
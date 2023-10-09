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

let polizas:any[] = []

async function cargarAgentes() {
    polizas = await ApiInsurance.post('/polizas/listar')
    let items:any[] = []
    let i = 0
    polizas.data.data.forEach(element => {
        items.push(polizas.data.data[i].cliente /* + ' - ' + polizas.data.data[i].tipo*/)
        i=i+1
    });
    console.log('reclamos: '+items)
    polizas = items
    //console.log(JSON.stringify(agentes.data.data[0].nombre))
}

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
                
                <View style={{flexDirection: 'column', marginBottom:15,}}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../../../images/icons/file-signature-solid.svg')} style={{width:24, height:24,}}/>
                        <Text style={{paddingVertical: 2,}}>Póliza</Text>
                    </View>
                    < SelectDropdown
                        buttonStyle={ Estilos.Selector
                            
                        }
                        data = {polizas}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        buttonTextAfterSelection={
                            (selectedItem, index) => {
                                return selectedItem
                            }
                        }
                        rowTextForSelection={
                            (item, index) => {
                                return item
                            }
                        }
                        defaultButtonText="Seleccione un agente."
                        dropdownIconPosition="right"
                    />
                </View>
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
    Selector:{
        backgroundColor:    '#FFFFFF',
        borderColor:        AppColors.info,
        borderStyle:        'solid',
        borderRadius:       5,
        borderWidth:        1,
        width:              440,
        height:             40,
    }
})
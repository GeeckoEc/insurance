import React from "react";
import { StatusBar } from "expo-status-bar";
import { AppColors } from "../../theme/AppTheme";
import { BotonPrimario, BotonSecundario } from "../../../components/botones";
import { Campo } from "../../../components/campos";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../../App";
import   ViewModel from "./EditarPolizaViewModel";
import { StyleSheet, Text, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

export const EditarPolizaScreen = () => {
    const Navegacion = useNavigation<StackNavigationProp<RootStackParamList>>();
    const {id, nombre, onChange, editar} = ViewModel();
    const tipos = [
        'Poliza contra accidentes',
        'Poliza de bienes raices',
        'Poliza contra enfermedades,',
        'Polizas de activos',
        'Poliza de capila de riesgo',
    ]
    return (
        <View style={Estilos.Contenendor}>
            <StatusBar style="auto"/>

            
            <View style={Estilos.Formulario}>
                <Text style={Estilos.Titulo}>Editar Poliza</Text>
                <Text style={Estilos.Descripción}>A continuación realice los cambios necesarios en la información de la Poliza.</Text>
                < SelectDropdown
                    buttonStyle={ Estilos.Selector
                    }
                    data = {tipos}
                    onSelect={(SelectedItem, index) => {
                        console.log(SelectedItem, index)
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
                    defaultButtonText="Seleccione un tipo."
                    dropdownIconPosition="right"
                />
                <Campo 
                    icono="id-badge-solid"
                    etiqueta="ID del Poliza"
                    consejo="No eliminar el ID del Poliza."
                    valor={id}
                    propiedad="id"
                    teclado="default"
                    entradaSegura={false}
                    onChangeText={onChange}
                />
                <Campo 
                    icono="user"
                    etiqueta="Nombre Completo"
                    consejo="Ingrese el nombre del Poliza."
                    valor={nombre}
                    propiedad="nombre"
                    teclado="default"
                    entradaSegura={false}
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
                    onPress={() => Navegacion.navigate('ListaPolizasScreen')}
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
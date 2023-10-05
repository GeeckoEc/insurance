import React from "react";
import { StatusBar } from "expo-status-bar";
import { AppColors } from "../../theme/AppTheme";
import { BotonPrimario, BotonSecundario } from "../../../components/botones";
import { Campo } from "../../../components/campos";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import App, { RootStackParamList } from "../../../../../App";
import ViewModel from "./NuevaPolizaViewModel";
import {Image, StyleSheet, Text, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { ApiInsurance } from '../../../../data/sources/remote/api/ApiInsurance';


let agentes:any[] = []
let clientes:any[] = []
async function cargarAgentes() {
    agentes = await ApiInsurance.post('/agentes/listar')
    let nombres:any[] = []
    let i = 0
    agentes.data.data.forEach(element => {
        nombres.push(agentes.data.data[i].nombre)
        i=i+1
    });
    console.log('Agentes: '+nombres)
    agentes=nombres
    //console.log(JSON.stringify(agentes.data.data[0].nombre))
}
async function cargarClientes() {
    clientes = await ApiInsurance.post('/clientes/listar')
    let nombres:any[] = []
    let i = 0
    clientes.data.data.forEach(element => {
        nombres.push(clientes.data.data[i].nombre)
        i=i+1
    });
    console.log('Clientes: ' + nombres)
    clientes=nombres
    //console.log(JSON.stringify(agentes.data.data[0].nombre))
}
cargarAgentes()
cargarClientes()

export const NuevaPolizaScreen = () => {
    const Navegacion = useNavigation<StackNavigationProp<RootStackParamList>>();
    const {nombre, onChange, guardar} = ViewModel();
    const [expanded, setExpanded] = React.useState(false);
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
                <Text style={Estilos.Titulo}>Información de la nueva Poliza</Text>
                <Text style={Estilos.Descripcion}>A continuación ingrese los datos solicitados para la nueva Poliza.</Text>
                <View style={{flexDirection: 'column', marginBottom: 15,}}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../../../images/icons/file-signature-solid.svg')} style={{width:24, height:24,}}/>
                        <Text style={{paddingVertical: 2,}}>Tipo de póliza</Text>
                    </View>
                    < SelectDropdown
                        buttonStyle={ Estilos.Selector
                            
                        }
                        data = {tipos}
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
                        defaultButtonText="Seleccione un tipo."
                        dropdownIconPosition="right"
                    />
                </View>
                <View style={{flexDirection: 'column', marginBottom:15,}}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../../../images/icons/user-tie-solid.svg')} style={{width:24, height:24,}}/>
                        <Text style={{paddingVertical: 2,}}>Agente</Text>
                    </View>
                    < SelectDropdown
                        buttonStyle={ Estilos.Selector
                            
                        }
                        data = {agentes}
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
                
                <View style={{flexDirection: 'column', marginBottom:15,}}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../../../../images/icons/user-solid.svg')} style={{width:24, height:24,}}/>
                        <Text style={{paddingVertical: 2,}}>Cliente</Text>
                    </View>
                    < SelectDropdown
                        buttonStyle={ Estilos.Selector
                            
                        }
                        data = {clientes}
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
                        defaultButtonText="Seleccione un cliente."
                        dropdownIconPosition="right"
                    />
                </View>
                <BotonPrimario 
                    icono="save"
                    texto="Guardar"
                    onPress={() => guardar()}
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
    Descripcion: {
        color:              AppColors.text,
        textAlign:          'center',
        marginVertical:     20,
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
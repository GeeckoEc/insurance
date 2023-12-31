import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppColors } from '../../theme/AppTheme';
import { BotonPrimario, BotonSecundario, BotonPeligro } from '../../../components/botones';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../../../../../App';
import ViewModel from './ListaReclamosViewModel';
import {FlatList, SafeAreaView, StyleSheet, Text, View, } from  'react-native';
import { ApiInsurance } from '../../../../data/sources/remote/api/ApiInsurance';

let datos = [{data:{id:0}}]
async function cargar() {
    datos = await ApiInsurance.post('/reclamos/listar')
}
cargar()

type ItemProps = {fecha: string, tipo: string, descripcion: string, editar: ()=>void, eliminar: ()=>void}

const Item = ({fecha, tipo, descripcion,  editar, eliminar,}:ItemProps) => (
    <View style={Estilos.Item}>
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Text >{fecha}</Text>
        </View>
        
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Text >{tipo}</Text>
        </View>
        
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Text >{descripcion}</Text>
        </View>
        <View style={{flexDirection:'row', width: 310}}>
            <BotonPrimario
                icono="pen-solid"
                texto="Editar"
                onPress={editar}
            />
            <BotonPeligro
                icono="trash-alt"
                texto="Eliminar"
                onPress={eliminar}
            />
        </View>
    </View>
);

export const ListaReclamosScreen = () => {
    const Navegacion = useNavigation<StackNavigationProp<RootStackParamList>>();
    return(
        <View style={Estilos.Contenedor}>
            <SafeAreaView style={Estilos.Lista}>
                <View style={Estilos.Encabezado}>
                    <View style={{flex: 1, flexDirection: 'row',}}>
                        <Text style={Estilos.Encabezados}>Fecha de reclamo</Text>
                        <Text style={Estilos.Encabezados}>Tipo de póliza</Text>
                        <Text style={Estilos.Encabezados}>Descripción</Text>
                    </View>
                    <View style={{width: 300, marginRight: 20}}>
                        <BotonPrimario
                            icono='user-plus-solid'
                            texto='Nuevo Reclamo'
                            onPress={()=>Navegacion.navigate('NuevoReclamoScreen')}
                        />
                    </View>
                </View>
                <FlatList 
                    //data = {datos.data.data}
                    data = {datos.data.data}
                    renderItem={
                        ({item}) => <Item   
                                        fecha={
                                            item.fecha
                                            /*() => {
                                                let fecha = new Date(item.fecha);
                                                let nuevaFecha = fecha.getDay() + ', ' + fecha.getDate() + ' de ' + fecha.getMonth() + ' del ' + fecha.getFullYear();
                                                console.log(nuevaFecha)
                                                alert(nuevaFecha)
                                            }*/
                                        }
                                        tipo={item.tipo}
                                        descripcion={item.descripcion}
                                        editar={()=>Navegacion.navigate('EditarReclamoScreen')} 
                                        eliminar={()=> Navegacion.navigate('EliminarReclamoScreen')}
                                    />
                    }
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </View>
    )
}

const Estilos = StyleSheet.create({
    Contenedor: {
        flex:               1,
        backgroundColor:    AppColors.background,
    },
    Encabezado: {
        flexDirection:      'row',
        height:             55,
        borderColor:        '#D8D8D8',
        borderBottomWidth:  1,
        borderStyle:        'solid',

    },
    Lista: {
        flex:               1,
        backgroundColor:    AppColors.box
    },
    Item: {
        paddingVertical:    5,
        paddingHorizontal:  10,
        flexDirection:      'row',
    },
    Encabezados:{
        flex:               1, 
        paddingTop:         30, 
        textTransform:      'uppercase', 
        fontWeight:         '700', 
        color:              AppColors.title,
        marginLeft:         10,
    }
})
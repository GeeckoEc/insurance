import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppColors } from '../../theme/AppTheme';
import { BotonPrimario, BotonSecundario, BotonPeligro } from '../../../components/botones';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../../../../../App';
import ViewModel from './ListaPolizasViewModel';
import {FlatList, SafeAreaView, StyleSheet, Text, View, } from  'react-native';
import { ApiInsurance } from '../../../../data/sources/remote/api/ApiInsurance';

let datos = [{data:{id:0}}]
async function cargar() {
    datos = await ApiInsurance.post('/polizas/listar')
}
cargar()

type ItemProps = {tipo: string, cliente: string, agente: string, editar: ()=>void, eliminar: ()=>void}

const Item = ({tipo, agente, cliente,  editar, eliminar,}:ItemProps) => (
    <View style={Estilos.Item}>
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Text >{tipo}</Text>
        </View>
        
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Text >{agente}</Text>
        </View>
        
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Text >{cliente}</Text>
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

export const ListaPolizasScreen = /*async*/ () => {
    const Navegacion = useNavigation<StackNavigationProp<RootStackParamList>>();
    return(
        <View style={Estilos.Contenedor}>
            <SafeAreaView style={Estilos.Lista}>
                <View style={Estilos.Encabezado}>
                    <View style={{flex: 1, flexDirection: 'row',}}>
                        <Text style={Estilos.Encabezados}>Tipo de póliza</Text>
                        <Text style={Estilos.Encabezados}>Agente</Text>
                        <Text style={Estilos.Encabezados}>Cliente</Text>
                    </View>
                    <View style={{width: 300, marginRight: 20}}>
                        <BotonPrimario
                            icono='user-plus-solid'
                            texto='Nuevo Poliza'
                            onPress={()=>Navegacion.navigate('NuevaPolizaScreen')}
                        />
                    </View>
                </View>
                <FlatList 
                    //data = {datos.data.data}
                    data = {datos.data.data}
                    renderItem={
                        ({item}) => <Item   
                                        tipo={item.tipo}
                                        agente={item.agente}
                                        cliente={item.cliente}
                                        editar={()=>Navegacion.navigate('EditarPolizaScreen')} 
                                        eliminar={()=> Navegacion.navigate('EliminarPolizaScreen')}
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
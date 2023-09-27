import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppColors } from '../../theme/AppTheme';
import { BotonPrimario, BotonSecundario, BotonPeligro } from '../../../components/botones';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../../../../../App';
import {FlatList, SafeAreaView, StyleSheet, Text, View, } from  'react-native';

const data = [
    {id: '1', nombre: 'Natalia Torres'},
    {id: '2', nombre: 'Marcos Oviedo'},
    {id: '3', nombre: 'Yolanda Tenorio'},
    {id: '4', nombre: 'Rosa Daquilema'},
    {id: '5', nombre: 'Tito Pérez'},
    {id: '6', nombre: 'Vinicio Farías'},
]

type ItemProps = {nombre: string, editar: ()=>void, eliminar: ()=>void}

const Item = ({nombre,  editar, eliminar,}:ItemProps) => (
    <View style={Estilos.Item}>
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Text >{nombre}</Text>
        </View>
        <View style={{ flex:1,flexDirection:'row'}}>
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

export const ListaClientesScreen = () => {
    const Navegacion = useNavigation<StackNavigationProp<RootStackParamList>>();
    return(
        <View style={Estilos.Contenedor}>
            <SafeAreaView style={Estilos.Lista}>
                <View style={Estilos.Encabezado}>
                    <View style={{flex: 1,}}>
                        
                    </View>
                    <View style={{width: 300, marginRight: 20}}>
                        <BotonPrimario
                            icono='user-plus-solid'
                            texto='Nuevo Cliente'
                            onPress={()=>Navegacion.navigate('NuevoClienteScreen')}
                        />
                    </View>
                </View>
                <FlatList 
                    data = {data}
                    renderItem={({item}) => <Item nombre={item.nombre} editar={()=>Navegacion.navigate('EditarClienteScreen')} eliminar={()=> alert('pendiente...')}/>}
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
    }
})
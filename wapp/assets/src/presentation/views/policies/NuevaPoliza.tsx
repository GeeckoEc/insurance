import React from "react";
import { StatusBar } from "expo-status-bar";
import { AppColors } from "../../theme/AppTheme";
import { BotonPrimario, BotonSecundario } from "../../../components/botones";
import { Campo } from "../../../components/campos";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../../App";
import ViewModel from "./NuevaPolizaViewModel";
import { ListItem, StyleSheet, Text, View } from "react-native";

export const NuevoPolizaScreen = () => {
    const Navegacion = useNavigation<StackNavigationProp<RootStackParamList>>();
    const {nombre, onChange, guardar} = ViewModel();
    const [expanded, setExpanded] = React.useState(false);
    return (
        <View style={Estilos.Contenendor}>
            <StatusBar style="auto"/>
            <View style={Estilos.Formulario}>
                <Text style={Estilos.Titulo}>Información de la nueva Poliza</Text>
                <Text style={Estilos.Descripcion}>A continuación ingrese los datos solicitados para la nueva Poliza.</Text>
                <ListItem.Accordion
                    content={
                    <ListItem.Content>
                        <ListItem.Title>Top Users</ListItem.Title>
                        <ListItem.Subtitle>Tap to expand</ListItem.Subtitle>
                    </ListItem.Content>
                    }
                    isExpanded={expanded}
                    onPress={() => {
                    setExpanded(!expanded);
                    }}
                >
                    <ListItem>
                    <Avatar
                        rounded
                        source={{
                        uri: "https://randomuser.me/api/portraits/men/32.jpg",
                        }}
                    />
                    <ListItem.Content>
                        <ListItem.Title>John Doe</ListItem.Title>
                        <ListItem.Subtitle>Principle Engineer</ListItem.Subtitle>
                    </ListItem.Content>
                    </ListItem>
                    <ListItem>
                    <Avatar
                        rounded
                        source={{
                        uri: "https://randomuser.me/api/portraits/men/36.jpg",
                        }}
                    />
                    <ListItem.Content>
                        <ListItem.Title>Albert</ListItem.Title>
                        <ListItem.Subtitle>Staff Engineer</ListItem.Subtitle>
                    </ListItem.Content>
                    </ListItem>
                </ListItem.Accordion>
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
    }
})
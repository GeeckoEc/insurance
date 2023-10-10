import React, { useState } from "react";
import { AppColors } from "../presentation/theme/AppTheme";
import { Image, StyleSheet, Text, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

interface Props {
    icono:          string,
    etiqueta:       string,
    consejo:        string,
    valor:          string,
    propiedad:      string,
    datos:          any[],
    onSelect:   (propiedad: string, id: any, valor: any) => void
}


export const elementoSelector = ({icono, etiqueta, consejo, valor, propiedad, datos, onSelect}:Props) => {
const [selected, setSelected] = React.useState("");
    
    return (
        <View style={Estilos.Contenedor}>
            <View style={Estilos.Grupo}>
                <Image 
                    source={require('../../images/icons/' + icono + '.svg')} 
                    style={Estilos.icono}
                />
                <Text style={Estilos.Etiqueta}>{etiqueta}</Text>
            </View>
            <SelectList
                setSelected={(val:any) => setSelected(val)}
                data={datos}
                save="value"
                placeholder={consejo}
                boxStyles={Estilos.Selector}
            />
            {/*< SelectDropdown
                buttonStyle={ Estilos.Selector }
                defaultButtonText={consejo}
                dropdownIconPosition="right"
                rowTextStyle={{fontSize: 14, marginVertical:4}}
                buttonTextStyle={{fontSize:14,}}
                data = {datos}
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
            />*/}
        </View>
    )
}

const Estilos = StyleSheet.create({
    Contenedor:{
        marginTop:          0,
        marginBottom:       10,
    },
    Grupo: {
        paddingTop:         3,
        paddingBottom:      3,
        flexDirection:      "row",
    },
    icono: {
        height:             24,
        width:              24,
        marginEnd:          10,
    },
    Etiqueta: {
        paddingTop:         2,
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
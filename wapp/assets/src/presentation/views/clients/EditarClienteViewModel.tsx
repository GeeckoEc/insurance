import React,{useState} from "react";
import { ApiInsurance } from "../../../../data/sources/remote/api/ApiInsurance";

export const NuevoCienteViewModel = () => {

    const [valores, definirValores] = useState({
        id:         "",
        nombre:     "",
    });

    const onChange = (propiedad: string, valor: any) => {
        definirValores({...valores, [propiedad]:valor})
    }

    const editar = async () => {
        //console.log(JSON.stringify(valores))
        try {
            console.log(valores);
            const respuesta = await ApiInsurance.post('/clientes/editar', valores);
            console.log('Respuesta del servidor: ' + JSON.stringify(respuesta));
        } catch (error) {
            console.log('Error: ' + error)
        }
    };

    return {
        ...valores, onChange, editar
    }
}

export default NuevoCienteViewModel;
import React,{useState} from "react";
import { ApiInsurance } from "../../../../data/sources/remote/api/ApiInsurance";

export const NuevaPolizaViewModel = () => {

    const [valores, definirValores] = useState({
        nombre:     "",
    });

    const onChange = (propiedad: string, valor: any) => {
        definirValores({...valores, [propiedad]:valor})
    }

    const guardar = async() => {
        // console.log(JSON.stringify(valores))
        try {
            console.log(valores);
            const respuesta = await ApiInsurance.post('/polizas/insertar', valores);
            console.log('Respuesta del servidor: ' + JSON.stringify(respuesta));
        } catch (error) {
            console.log('Error: ' + error)
        }
    };

    return {
        ...valores, onChange, guardar
    }
}

export default NuevaPolizaViewModel;
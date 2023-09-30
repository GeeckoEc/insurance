import React, {useState} from "react";
import { ApiInsurance } from "../../../../data/sources/remote/api/ApiInsurance";

export const EliminarPolizaViewModel = () => {
    const [valores, definirValores] = useState({
        id:         '',
    })

    const onChange = (propiedad: string, valor: any) => {
        definirValores({ ...valores, [propiedad]:valor });
    }

    const eliminar = async () => {
        //console.log(JSON.stringify(valores))
        try {
            console.log(valores);
            const respuesta = await ApiInsurance.post('/polizas/eliminar', valores);
            console.log('Respuesta del servidor: ' + JSON.stringify(respuesta));
        } catch (error) {
            console.log('Error: ' + error)
        }
    };

    return {
        ...valores, onChange, eliminar
    }
}

export default EliminarPolizaViewModel;
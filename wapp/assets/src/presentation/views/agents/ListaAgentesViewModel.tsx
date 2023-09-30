import React,{useState} from "react";
import { ApiInsurance } from "../../../../data/sources/remote/api/ApiInsurance";

export const ListaAgentesViewModel = () => {

    const [valores, definirValores] = useState({
        id:     "",
    });

    const onChange = (propiedad: string, valor: any) => {
        definirValores({...valores, [propiedad]:valor})
    }

    const cargar = async() => {
        return(
            await ApiInsurance.post('/agentes/listar')
        )
    }

    return {
        ...valores, onChange, cargar
    }
}

export default ListaAgentesViewModel;
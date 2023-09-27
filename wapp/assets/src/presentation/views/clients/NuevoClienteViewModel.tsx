import React,{useState} from "react";

export const NuevoCienteViewModel = () => {

    const [valores, definirValores] = useState({
        nombre:     "",
    });

    const onChange = (propiedad: string, valor: any) => {
        definirValores({...valores, [propiedad]:valor})
    }

    const guardar = () => {
        console.log(JSON.stringify(valores))
    };

    return {
        ...valores, onChange, guardar
    }
}

export default NuevoCienteViewModel;
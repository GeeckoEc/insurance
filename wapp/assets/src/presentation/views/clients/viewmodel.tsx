import React,{useState} from "react";

export const [valores, definirValores] = useState({
    nombre:     "",
});

const onChange = (propiedad: string, valor: any) => {
    definirValores({...valores, [propiedad]:valor})
}
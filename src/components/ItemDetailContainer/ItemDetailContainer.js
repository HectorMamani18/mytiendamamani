import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  { getItem } from "../Datos/productos";
import Detail from "../ItemDetail/ItemDetail";


export default function ItemDetailContainer(){
    const {id} =useParams();
    const produId = !isNaN(id) && +id;


    const {dataDeil, setDataDeil} = useState({});
    useEffect(()=>{
        setDataDeil({})
        const produprom = getItem(produId)
        produprom.then(
            (Datos)=>{
                setDataDeil(Datos);

            },
            (err) => {
                console.log(
                    "Ha ocurrido un error al buscar la info del Producto: ",
                    err
                );
            }
        );
    },[]);
    return(

         <div>
            {dataDeil && dataDeil.id ? (
                <Detail {...dataDeil}/>
            ) :( 
                <div > cargando</div>
            ) }
         </div>
    );
}
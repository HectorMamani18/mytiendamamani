
import React, { useEffect, useState } from "react";
import { getItemById } from "../../Datos/productos";

import Detail from '../ItemDetail/ItemDetail'


export default function ItemDetailContainer() {
    
    const [itemDeil, setDataDeil] = useState([]);
    const [loading, setLoading] = useState(true)

    
    const { idItem } = useParams();
    console.log(idItem);

    useEffect(() => {

        getItemById(idItem)
        .then(item =>{
            setDataDeil(item[0])
        })
        .catch((err)=> console.log('Ocurrio un error. ' + err))
        .finally(()=>setLoading(false))

    }, [idItem]);
    return(

         <div>
            <Detail  {...itemDeil}  LoadingPage={loading}/>
         </div>
    );
}
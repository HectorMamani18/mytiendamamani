import React from 'react'
import ItemList from '../catalogo/ItemList';
import Datos from '../Datos/productos';



 function ItemListContainer () {
    const getFetch = new Promise ((resolver, rechazar)=>{
        let condition=true
    if(condition){
        setTimeout(()=>{
            resolver(Datos)
        },2000);
    }
    else{
        rechazar(console.log("No se Encontraron Datos"))
    }
    })
    
    
    return (
    <div>
      
        <ItemList/>
        
    </div>
    );
}

export default ItemListContainer;
import React from 'react'
import ItemList from '../ItemList/ItemList'
import Datos from '../Datos/productos';

 export const getFetch = new Promise ((resolver, rechazar)=>{
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

 function ItemListContainer () {
     return (
    <div>
      
        <ItemList/>
        
    </div>
    );
}

export default ItemListContainer;
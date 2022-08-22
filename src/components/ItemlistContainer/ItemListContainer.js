import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList'
import Datos, {prodData} from '../Datos/productos'




 export default function ItemListContainer () {
    const{id} =useParams();
    const category = !isNaN(id) && +id;

   const [listItem, setlistItem] = useState([]);
   useEffect(()=>{
    setlistItem([]);
    const productosProm = prodData(category);
    productosProm.then(
        (Datos)=>{
            setlistItem(Datos);
        },
        (err)=>{
            console.log("error",err);
        }
    );
   },[category])
    
     return (
    <div>
        {Array.isArray(listItem) && listItem.length === 0 ?(
            <div>cargando</div>
        ):(
            <ItemList productos={listItem}/>
        )}
      
        
        
    </div>
    );
}


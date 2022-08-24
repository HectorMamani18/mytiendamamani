import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList'
import  {prodData} from '../../Datos/productos'




 export default function ItemListContainer () {
    const{id} =useParams();
    const category = !isNaN(id) && +id;

   const [listItem, setlistItem] = useState([]);
   useEffect(()=>{
    setlistItem([]);
   async function getD (){
    const products = await prodData(category)
    setlistItem(products)
   }
   getD();
   },[category])
    
     return (
    <div>
        {Array.isArray(listItem) && listItem.length === 0 ?(
           <br></br>
        ):(
            <ItemList productos={listItem}/>
        )}
      
        
        
    </div>
    );
}


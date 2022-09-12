import React,{useState,useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import { getFetch } from '../../Datos/productos';





 export default function ItemListContainer () {
   
 const [listItem, setlistItem] = useState([]);
 const [loading, setLoading] = useState(true)
   useEffect(()=>{
    async function callFetch(){
        getFetch
        .then((res)=>setlistItem(res))
        .catch((err)=>console.log('error'.err))
        .finally(()=>setLoading(false))
    }
    callFetch();
   },[]);
    
     return (
    <div>
      
            <ItemList  ItemList={listItem} LoadingPage={loading}/>
      
      
        
        
    </div>
    );
}


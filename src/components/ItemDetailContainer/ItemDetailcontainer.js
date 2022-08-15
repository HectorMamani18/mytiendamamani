import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Detail from './ItemDetail';


function ItemDetailcontainer  ()  {
   const {idDeUsuario} = useParams();
   const{user, setUser} =useState();


   useEffect( ()=>{
    async function LoadItemDetail(){
       const resp = await fetch(`/DetailData.json`,)
       const info = await resp.json();
       setUser(info);
    }
LoadItemDetail();
   },[idDeUsuario])


  return (
    <div>
       <Detail {...user}/>
    </div>
  )
}

export default ItemDetailcontainer
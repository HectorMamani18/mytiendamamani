
import  React,{ useEffect, useState } from "react"
import getFetch from "../Datos/productos"
import Item from '../catalogo/Item'




function ItemList() {
  const[Datos,setDatos] = useState([])
   
useEffect (()=>{
    getFetch
    .then((resp)=>setDatos(resp))
    .catch(err=>console.log(err))
    

},[])

return(
    <div className="container">
        {
        Datos.map(Traje=>
    
      <Item
      key={Traje.id}
      articulo={Traje.articulo}
      imagen={Traje.imagen}/>
     
          )
        }

    </div>
)
}

export default ItemList;
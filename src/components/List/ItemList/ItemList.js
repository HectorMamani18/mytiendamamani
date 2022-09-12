import  React from "react"
import Item from '../Item/Item'





function ItemList({ItemList,LoadingPage}) {
 

return(
  <div>
   {LoadingPage ? <h1>Cargando Productos.....</h1>:
   
   
   
   ItemList.map((item)=>{
         return(
            <Item key={item.ItemList}{...item}/>
         )
      })
      
   }
  </div>
   )
}

export default ItemList
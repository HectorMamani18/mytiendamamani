import  React from "react"
import Item from '../Item/Item'





function ItemList({productos}) {
 

return(
    <div className="container">
        {Array.isArray(productos) && productos.map((produt)=>{
          return <Item key={produt.id} {...produt}/>
        })
      
        }

    </div>
)
}

export default ItemList;
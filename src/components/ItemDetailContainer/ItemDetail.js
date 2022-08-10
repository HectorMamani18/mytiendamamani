import React,{ useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

function ItemDetailContainer(){
    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch("public/DetailData.json")
        .then(response => response.json())
        .then(data=>{
            setItems(data)
        })
    },[])
     

    return items  
        
    }
 
export default   function Detail(){
    const Detail = ItemDetailContainer() 



    return(
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Precio</th>
            <th>Descripcion</th>
            <th>Talles</th>
          </tr>
        </thead>
        <tbody>
            {Detail.map(ds=>(

           <tr key={ds.id}>
            <td>{ds.Precio}</td>
            <td>{ds}</td>
            <td>Otto</td>
            <td>@mdo</td>
           </tr>


            ))}

        </tbody>
      </Table>
    )
}

import  React,{ useEffect, useState } from "react"
import getFetch from "../Datos/productos"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/Item.css'

  
function Item(){
    const[Datos,setDatos] = useState([])
    const[loading,setLoading]=useState(true)



useEffect (()=>{
    getFetch
    .then((resp)=>setDatos(resp))
    .catch(err=>console.log(err))
    .finally(()=>setLoading(false))

},[])

return(
    <div className="container">
        {
        Datos.map(Traje=>
        <Card  key={Traje.id} style={{ width: '18rem' }}>
        <Card.Img src={Traje.imagen} variant="top"  />
        <Card.Body>
          <Card.Title >{Traje.articulo}</Card.Title>         
          <Button variant="primary" >Especificaciones</Button>
          <h6>Stock disponible:{Traje.Stock}</h6>
        </Card.Body>
      </Card>)
        }

    </div>
)



}

export default Item;

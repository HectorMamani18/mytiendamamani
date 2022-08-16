import DetailData from'../Datos/DetailData.json'
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from '../catalogo/ItemCount';
import '../css/Item.css'
import {Link } from 'react-router-dom'
import {useState} from "react"


function Detail(){
  const [productAddedToCard, setProductAddedToCard] = useState(false);

  const onAdd= (quantity) =>{
   
  console.log(
      "Cantidad agregada: ",
      quantity
  );
  setProductAddedToCard(true);

  }


return(
  <div className='container'>

    {
      DetailData.map(DeData=>{
        return(
          <div key={DeData.id}> 
          <Card style={{ width: '18rem' }}>
          <Card.Img src={DeData.Img} variant="top" />
          <Card.Body >
            <Card.Title >{DeData.Descripcion}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>${DeData.Precio}</ListGroup.Item>
            <ListGroup.Item>Disponibles:{DeData.Stock}</ListGroup.Item>
            <ListGroup.Item>Talles:{DeData.Talles}</ListGroup.Item>
          </ListGroup>
        { productAddedToCard ?  <Link to={'/Cart'}> Terminar Mi Compra</Link> : (
        <ItemCount  initial={1} stock={DeData.Stock}  onAdd={onAdd}   />)
        }
         
         
        </Card>
        </div>
        )
      })
    }
  </div>
);
}

export default Detail;
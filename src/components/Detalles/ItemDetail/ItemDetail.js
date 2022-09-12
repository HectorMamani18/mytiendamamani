
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount'
import {Context}  from '../../Context/CartContext';



function Detail({imagen,Precio,articulo,Stock,id,LoandingPage}) {
  const {addCartItem} = useContext(Context);
 
  
  const [productoAgregado, setProductoAgregado] = useState(true);

  const onAdd= (quantity) =>{
    addCartItem();
   
  console.log(
      "Haz Agregado al Carrito: ",
      quantity
  );
  setProductoAgregado(true);

  }
  return (
    
		<div  >
			{LoandingPage ?
      <h1>cargando</h1>:
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <h2>{articulo}</h2>
        <Card.Title>{articulo}</Card.Title>
        <Card.Text>{Precio}</Card.Text>
        { productoAgregado ?  <Link to={'/Cart'}> Terminar Mi Compra</Link> : (
        <ItemCount  initial={1} stock={Stock}  onAdd={onAdd}   />)
        }
      </Card.Body>
    </Card>

      }

				
			
		</div>
    );
}

export default Detail;
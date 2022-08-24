
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount'
import {Context}  from '../../Context/CartContext';



function Detail( id,articulo,Precio,imagen,Stock) {
  const {addCartItem} = useContext(Context);
  const primerImg = Array.isArray(imagen) && imagen.length && imagen[0];
  
  const [productoAgregado, setProductoAgregado] = useState(false);

  const onAdd= (quantity) =>{
    addCartItem();
   
  console.log(
      "Haz Agregado al Carrito: ",
      quantity
  );
  setProductoAgregado(true);

  }
  return (
		<div >
			  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={primerImg.src} />
      <Card.Body>
        <Card.Title>{articulo}</Card.Title>
        <Card.Text>{Precio}</Card.Text>
        { productoAgregado ?  <Link to={'/Cart'}> Terminar Mi Compra</Link> : (
        <ItemCount  initial={1} stock={Stock}  onAdd={onAdd}   />)
        }
      </Card.Body>
    </Card>

					
			
		</div>
    );
}

export default Detail;
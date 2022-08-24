import Card from 'react-bootstrap/Card';
import './Item.css'
 import React from 'react';
 import {Link} from 'react-router-dom'
 
  
function Item({id,articulo,imagen}){
  const primerImg = Array.isArray(imagen) && imagen.length && imagen[0];
  

  return(
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={primerImg.src}></Card.Img>
      <Card.Body>
        <Card.Title>{articulo}</Card.Title>
        <Link className="link" to={`/item/${id}`} > <button> Ver detalle del producto</button></Link>
      </Card.Body>
    </Card>  
    </div>
  )



}

export default Item;

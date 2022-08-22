import Card from 'react-bootstrap/Card';
import './Item.css'
 import React from 'react';
 import {Link} from 'react-router-dom'
  
function Item({id,articulo,categoria,imagen,Stock}){
  const primerImg = Array.isArray(imagen) && imagen.length && imagen[0];
  

  return(
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{backgraundimage:`url(${primerImg.src})`}}></Card.Img>
      <Card.Body>
        <Card.Title>{articulo}</Card.Title>
        <Link className="link" to={`/item/${id}`} >Ver detalle del producto</Link>
      </Card.Body>
    </Card>  
    </div>
  )



}

export default Item;

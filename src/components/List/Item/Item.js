import Card from 'react-bootstrap/Card';
import './Item.css'
 import React from 'react';
 import {Link} from 'react-router-dom'
 
  
function Item({...item}){
  
  

  return(
    <div >
    <Card className='container' style={{ width: '18rem' }} >
      <Card.Img variant="top" src={item.imagen}></Card.Img>
      <Card.Body>
        <Card.Title>{item.articulo}</Card.Title>
        <Link className="link" to={`/item/${item.id}`} > <button> Ver detalle del producto</button></Link>
      </Card.Body>
    </Card>  
    </div>
  )



}

export default Item;

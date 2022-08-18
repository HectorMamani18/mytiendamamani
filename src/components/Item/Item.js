import Card from 'react-bootstrap/Card';
import './Item.css'
 import React from 'react';
 import Buton from '../Button/Button';
  
function Item(props){
  

  return(
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imagen} />
      <Card.Body>
        <Card.Title>{props.articulo}</Card.Title>
        <Buton/>
      </Card.Body>
    </Card>  
    </div>
  )



}

export default Item;

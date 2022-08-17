
import React, { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ItemCount from '../catalogo/ItemCount'



function Detail() {
  const [productoAgregado, setProductoAgregado] = useState(false);

  const onAdd= (quantity) =>{
   
  console.log(
      "Haz Agregado al Carrito: ",
      quantity
  );
  setProductoAgregado(true);

  }


	const { itemId } = useParams();
  const [item, setItem] = useState({});

	useEffect(() => {

		
		const getItem = async () => {
			const respuesta = await fetch(`/Data.json`,)
			const objJson = await respuesta.json();
			const ArrayDatos = objJson.productos;
			const ret = ArrayDatos.find(
				(objElem) => objElem.id === String(itemId))
			return ret || {};
      
		};

		getItem()
			.then((item) => {
				setItem(item);
		
			})

	}, []);

    return (
		<div id={item.id}>
			  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        { productoAgregado ?  <Link to={'/Cart'}> Terminar Mi Compra</Link> : (
        <ItemCount  initial={1} stock={item.Stock}  onAdd={onAdd}   />)
        }
      </Card.Body>
    </Card>

					
			
		</div>
    );
}

export default Detail;
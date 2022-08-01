import React,{useState} from "react";


 export  const ItemCount =  ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);
    
    const decrecimiento = () =>{
        setCount(count - 1);
    }

    const incremento = () =>{
        setCount(count + 1);
    }
    return(
        <div className="">
            <button disabled={count <= 1} onClick={decrecimiento}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={incremento}>+</button>
            <div>
                <button>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
import React,{useEffect, useState} from "react";



 export  const ItemCount =  ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));
    
    const decrecimiento = () =>{
        setCount(count - 1);
    }

    const incremento = () =>{
        setCount(count + 1);
    }

    useEffect(()=>{
        setCount(parseInt(initial));
    },[initial])
    return(
        <div className="">
            <button disabled={count <= 1} onClick={decrecimiento}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={incremento}>+</button>
            <div>
                <button disabled={stock<=0} onClick={()=>onAdd(count)}>Agregar al Carrito</button>
                
            </div>
        </div>
    )
}

export default ItemCount
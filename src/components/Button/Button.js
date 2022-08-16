import React from "react";
import {useNavigate} from 'react-router-dom'

 function Buton () {
    const navigatefn = useNavigate();

    const LoadUserDetail = ()=>{
    
      navigatefn("/Detalles")
    }
 return(
    <button onClick={LoadUserDetail}> Detalles</button>
 )


}
    
  
    




export default Buton;
import React from "react";
import {useNavigate} from 'react-router-dom'

 function Buton (id) {
    const navigatefn = useNavigate();

    const LoadUserDetail = ()=>{
      console.log ('UserId>', id);
      navigatefn("/Detalles")
    }
 return(
    <button onClick={LoadUserDetail}> Detalles</button>
 )


}
    
  
    




export default Buton;
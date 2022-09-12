import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
    return(

        <div>
            <Link to={'/Cart'}><ion-icon name="cart"> </ion-icon></Link>
        </div>
    )
}

export default Logo;
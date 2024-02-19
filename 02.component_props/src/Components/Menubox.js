/*import React from 'react'
import App from "../App";

const Menubox = (props) =>{

    console.log("컴포넌트로부터 넘겨받은 값",props.menuNm, props.price);

    let menu_style = {
        border:"2px solid black",
        margin:"10px"
    }

    return (
        <div style={menu_style}>
            <h3>{props.menuNm}</h3>
            <p>{props.price}원</p>
        </div>
    )
}

export default Menubox;
*/

///////////////// props 접근하는 방법(2번째) ///////////////////////////////////

import React from "react";
const Menubox = ({menuNm, price}) => {
    console.log("컴포넌트로부터 넘겨받은 값",menuNm, price);

    let menu_style = {
        border:"2px solid black",
        margin:"10px"
    }

    return (
        <div style={menu_style}>
            <h3>{menuNm}</h3>
            <p>{price}원</p>
        </div>
    )
}

export default Menubox;

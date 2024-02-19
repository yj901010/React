import React from "react";

const BaseCard = ({team, name}) => {
    let cars_style = {
        border:"2px solid skyblue",
        margin:"10px",
        textAlign:"center"
    }

    return (
        <div style={cars_style}>
            <h3>{team}</h3>
            <p>{name}</p>
        </div>
    )
}

export default BaseCard;
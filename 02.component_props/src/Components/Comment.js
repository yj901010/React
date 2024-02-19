import React from "react";

const Comment = ({nick, content}) => {
    let comment_style = {
        border:"2px solid black",
        margin:"10px",
        display : "flex"
    }

    let img_style = {
        width : "50px",
        height : "50px",
        borderRadius : "50%",
        padding : "10px"
    }

    return (
        <div style={comment_style}>
            <div>
            <img src="https://rizagraphics.weebly.com/uploads/5/2/0/0/52005349/s487950415479048569_p4_i1_w1290.jpeg" style={img_style}/>
            </div>
            <div>
            <p>{nick}</p>
            <p>{content}</p>
            </div>
        </div>
    )
}

export default Comment;
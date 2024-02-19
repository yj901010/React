import React from "react";
import Comment from "./Comment";
const CommentList = () => {
    return (
        <div>
            <h3>댓글 목록</h3>
            <div>
            <Comment nick="행인1" content="React 두 번째 수업이네요~!"/>
            <Comment nick="행인2" content="React 두 번째 수업이네요~!"/>
            <Comment nick="행인3" content="React 두 번째 수업이네요~!"/>
            <Comment nick="행인4" content="React 두 번째 수업이네요~!"/>
            </div>
        </div>
    )
}

export default CommentList;
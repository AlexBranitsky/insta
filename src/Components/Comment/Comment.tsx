import { Comment as modelComment } from "../../models/photos";

export const Comment = (props:{comment:modelComment, deleteComment:(comment_id:number) => void}) => {
    const deleteComment = ()=>{
        const toDelete = {"comment_id": props.comment.IdComment};
        fetch('/api/v1/comments/delete', {
            method:'DELETE',
            body: JSON.stringify(toDelete)
        }).then(response=>{
            props.deleteComment(props.comment.IdComment)
        })
    }

    return (
        <div>
            <div>{props.comment.Comment}</div>
            <div><button onClick={deleteComment}>Delete</button></div>
        </div>

    )
}


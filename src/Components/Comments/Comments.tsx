import { useEffect, useState } from "react";
import {Comment} from '../Comment/Comment';
import {Comments as modelComments, Comment as modelComment } from "../../models/photos";
import { NewComments } from "./AddComment";

export const Comments = (props:{user_id:number, photo_id:number}) => {
    const [comments, setComments] = useState([] as modelComments)
    useEffect(()=>{
        fetch(`/api/v1/comments/${props.user_id}/${props.photo_id}`)
        .then(response => response.json())
        .catch(reason => console.log('reason', reason))
        .then((response: modelComments)=>{
            if (response) setComments(response);
        })
    }, [props.photo_id, props.user_id]);

    const addCommentCallback = (newComment: modelComment) => {
        const toSend = {"user_id": props.user_id,"photo_id":props.photo_id, "comment":newComment.Comment};

        fetch("/api/v1/comments/add", {
            method: "POST",
            body: JSON.stringify(toSend)
        }).then(response=>response.json()).then((addedComment: modelComment) => {
            console.log(addedComment)
            setComments((oldComments: modelComments) => {
                return [...oldComments, newComment];
            });
        });
        
    }

    const deleteOneComment = (commentToDelete: number) => {
        const commentsWithoutDeleted = comments.filter(comment => {
            if (comment.IdComment === commentToDelete){
                return false;
            }
            return true;
        });

        setComments(commentsWithoutDeleted)
    }

    return (
        <div>
        {
            comments.map((comment: modelComment) => {
                return (
                    <Comment key={comment.IdComment} comment={comment} deleteComment={deleteOneComment} />
                )
            })
        }
        <NewComments user_id={props.user_id} photo_id={props.photo_id} addNewComment={addCommentCallback} />
        </div>
    )
}

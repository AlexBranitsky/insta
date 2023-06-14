import { useState } from "react";
import { Comment as modelComment } from "../../models/photos";

export const NewComments = (props: { user_id: number, photo_id:number, addNewComment: (newComment: modelComment) => void }) => {
    const [comment, setComment] = useState('')

    const changeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const textComment = e.target.value;
        setComment(textComment);
    }
    const addComment = (e: React.MouseEvent<HTMLButtonElement>) => {
        const newComment: modelComment = {
            IdComment: 0,
            IdUser: props.user_id,
            IdPhoto: props.photo_id,
            Comment: comment,

        };

        props.addNewComment(newComment)
    }

    return (
        <div>
            <div>
                <textarea cols={50} rows={5} placeholder='Enter your comment!'
                    value={comment}
                    onChange={changeText} /></div>
            <div><button onClick={addComment}>Add</button></div>
        </div>
    )
}
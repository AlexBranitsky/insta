import { Photo as modelPhoto } from "../../models/photos";
import { Comments } from '../Comments/Comments';
import s from './Photo.module.css';

export const Photo = (props: {photo: modelPhoto}) => {
    console.log(props.photo)
    return (
        <div className={s.photo}>
            <img src={`/api/v1/photo/${props.photo.IDUser}/${props.photo.IDPhoto}`} alt='foto'></img>
            {/* <div>{props.photo.description}</div> */}
            {/* <div>{props.photo.author}</div> */}
            <Comments user_id={props.photo.IDUser} photo_id={props.photo.IDPhoto}/>
        </div>
    )
}

import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import {
    Photo as modelPhoto,
    Photos as modelPhotos
} from '../../models/photos';
import { Photo } from '../Photo/Photo';
import { NewPhoto } from './Addphoto';


export const Photos = (props: { url: string, user_id: number }) => {
    const [photos, setPhotos] = useState([] as modelPhotos);
    useEffect(() => {
        props.user_id && fetch(props.url, { method: 'POST', body: JSON.stringify({ user_id: props.user_id }) })
            .then(response => response.json())
            .then((response: modelPhotos) => {
                setPhotos(response)
            });
    }, [props.url, props.user_id]);

    const addNewPhotoCallBack = (addNewPhoto: modelPhoto)=>{
        setPhotos([...photos, addNewPhoto])
    }

    if (props.user_id) {
        return (
            <div >
                {photos && photos.map((photo: modelPhoto) => {
                    return (
                        <Photo key={photo.IDPhoto} photo={photo} />
                    )
                })
                }
                <NewPhoto user_id={props.user_id} addNewPhoto={addNewPhotoCallBack}></NewPhoto>
            </div>
        );
    }

    return (
        <Navigate to="/"></Navigate>
    )
};


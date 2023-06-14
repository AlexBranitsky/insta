
import { Photo as modelPhoto } from "../../models/photos";

export const NewPhoto = (props: { user_id: number, addNewPhoto: (addNewPhoto: modelPhoto) => void }) => {
    const submitPhoto = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const myform = new FormData(e.target as any);

        fetch("/api/v1/photos/add", {
            method: "POST",
            body: myform
        }).then(response => response.json()).then((response: modelPhoto) => props.addNewPhoto(response));
    }

    return (
        <div>
            <form onSubmit={submitPhoto}>
                <input name='file-upload' type='file' />
                <input type='hidden' name='user-id' value={props.user_id} />
                <input type="submit" />
            </form>
        </div>
    )
}
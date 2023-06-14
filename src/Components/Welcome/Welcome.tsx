import { FormEvent, ChangeEvent, useState } from "react";
import { User } from "../../models/photos";
import s from './Welcome.module.css';

export const Welcome = (props: { authorize: (user: User) => void }) => {
    const [userId, setUserId] = useState(0);

    const changeId = (e: ChangeEvent<HTMLInputElement>) => {
        let Id = e.target.value;
        setUserId(parseInt(Id))
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        fetch(`/api/v1/user/${userId}`)
            .then(response => response.json())
            .then((user: User) => props.authorize(user));
    }

    return (
        <div className={s.hello}>

            <h1>Welcome</h1>
            <h3>Please enter your ID</h3>
            <div>
                <form onSubmit={onSubmit}>
                    <input type="number" onChange={changeId} value={userId} />
                    <div className="button">
                        <input type="submit" />
                    </div>
                </form>
            </div>

        </div>
    )
}
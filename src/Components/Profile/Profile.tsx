import { useState } from 'react';
import { User } from '../../models/photos';
import s from './Profile.module.css';


export const Data = (props: { user: User, updateUser: (user: User) => void }) => {
    const [name, setName] = useState(props.user.Name)
    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newName = e.target.value;
        setName(newName);
    }
    const [email, setEmail] = useState(props.user.Email)
    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value
        setEmail(newEmail)
    }

    const submitName = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch('/api/v1/users/update/name', {
            method: 'PUT',
            body: JSON.stringify({ "user_id": props.user.ID, "new name": name })
        }).then(res => res.json()).then((res: User) => {
            props.updateUser(res);
        })
    }
    const submitEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch('/api/v1/users/update/email', {
            method: 'PUT',
            body: JSON.stringify({ 'user_id': props.user.ID, 'new email': email })
        }).then(response => response.json()).then((user: User) => {
            props.updateUser(user)
        })
    }
    return (
        <>
            <form onSubmit={submitName}>
                <div className={s.dsta}>
                    <div><input type="text" placeholder="Enter your name:"
                        value={name} onChange={changeName} /></div>
                    <div><button type='submit'>Update Name</button></div>
                </div>
            </form>

            <form onSubmit={submitEmail}>
                <div><input type="text" placeholder='Enter your a new Email'
                    value={email} onChange={changeEmail} /></div>
                <div><button type='submit'>Update Email</button></div>
            </form>
        </>
    )
}

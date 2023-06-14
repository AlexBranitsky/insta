import { User } from '../../models/photos'

import s from './Header.module.css'

export const Header = (props: {user: User}) =>{
    return (
        <div className={s.header}>
            <div className={s.header_label}>Insta Animals</div>
            <div>{props.user.Name} {props.user.Email}</div>
        </div>
    )
}

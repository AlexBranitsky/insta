import React from "react";
import { NavLink } from "react-router-dom";
import s from './Nav.module.css';
export const Nav = ()=>{
    return(
        <div className={s.navigation}>
            <div><NavLink to={'/content'}>Content</NavLink></div>
            <div><NavLink to={'/profile'}>Profile</NavLink></div>
        </div>
    )
}
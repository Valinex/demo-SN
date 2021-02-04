import React from 'react';
import inf from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={inf.header}>
            <div className={inf.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
    </header>
}

export default Header
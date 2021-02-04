import React from 'react';
import inf from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";


const Navbar = (props) => {


    return (

     <nav className={inf.nav}>
        <div className={inf.item}><NavLink to="/profile" activeClassName={inf.active}>Profile</NavLink></div>
        <div className={inf.item}><NavLink to="/dialogs" activeClassName={inf.active}>Message</NavLink></div>
         <div className={inf.item}><NavLink to="/users" activeClassName={inf.active}>Users</NavLink></div>
        <div className={inf.item}><NavLink to="/news" activeClassName={inf.active}>News</NavLink></div>
        <div className={inf.item}><NavLink to="/music" activeClassName={inf.active}>Music</NavLink></div>
        <div className={inf.item}><NavLink to="/settings" activeClassName={inf.active}>Settings</NavLink></div>
{/*        <div className={inf.friends}>Friends</div>
                {<Friends friends={state.friends}/>}*/}
    </nav>)

}
export default Navbar
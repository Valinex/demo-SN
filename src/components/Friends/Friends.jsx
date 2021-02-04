import React from "react";
import inf from './Friends.module.css';
import FriendsInfo from "./FriendsInfo/FriendsInfo";


const Friends = (props) => {


    let FriendsElements =
        props.friends.map( f => <FriendsInfo img={f.img} name={f.name}/>);
    return (
        <div className={inf.FriendsElements}>
            {FriendsElements}
     </div>
    )
}

export default Friends
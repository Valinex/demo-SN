import React from "react";
import inf from './FriendsInfo.module.css';


const FriendsInfo = (props) => {

    return (
        <div className={inf.info}>
            <div className={inf.friendsimg}>
                {props.img}
            </div>
            <div className={inf.friendsname}>
                {props.name}
            </div>

        </div>

    )
}

export default FriendsInfo
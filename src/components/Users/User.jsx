import React from "react";
import inf from "./Users.module.css";
import userPhoto from "../../assets/images/user.png"
import {NavLink} from "react-router-dom";

let User = ({user, ...props}) => {
    return <div className={inf.allUsers}>
                    <span>
                        <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={inf.UserPhoto}/>
                        </NavLink>
                    </span>
        <div className={inf.UserInformation}>
            <span>
                <div>Name: {user.name}</div>
                <div>Status: {user.status != null ? user.status : "------"}</div>
            </span>
            <span>
                {user.followed
                    ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                        props.unfollow(user.id)
                    }} className={inf.buttonSubscribe}>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                        props.follow(user.id)
                    }} className={inf.buttonSubscribe}>Follow</button>}
            </span>
        </div>
    </div>
}

export default User;
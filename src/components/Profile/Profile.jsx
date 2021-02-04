import React from 'react';
import inf from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profileinfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {
    return (
        <div>
            <Profileinfo isOwner={props.isOwner} saveProfile={props.saveProfile} profile={props.profile} status={props.status}
                         updateStatus={props.updateStatus} saveMainPhoto={props.saveMainPhoto}
                         />
            <MyPostsContainer/>
        </div>
    )
}
export default Profile
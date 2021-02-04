import React, {useState} from 'react';
import inf from "./Profileinfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";

const Profileinfo = ({profile, saveMainPhoto, isOwner, status, updateStatus, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            saveMainPhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );

    }
    return (
        <div>
            <div className={inf.mainPhoto}>
                <img
                    src="https://static3.depositphotos.com/1000454/256/i/450/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg"/>
            </div>
            <div className={inf.descriptionBlock}>
                <div>
                    <div>
                        <img src={profile.photos.large || userPhoto}/>
                    </div>
                    <div>
                        Change photo - {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                    </div>
                </div>
                <div className={inf.informationAboutUser}>
                    {editMode
                        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                        : <ProfileData startEditMode={() => {
                            setEditMode(true)
                        }} profile={profile} isOwner={isOwner}/>}

                </div>
            </div>
        </div>
    )
}
const ProfileData = ({profile, isOwner, startEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={startEditMode}>Edit information</button>
        </div>}
        <div>
            <b>Full name</b> - {profile.fullName}
        </div>
        <div>
            <b> About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b> Looking for a job</b>: {profile.lookingForAJob ? "Yes" : "No"}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>Professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={inf.contact}><b>{contactTitle}</b>: {contactValue}</div>
}
export default Profileinfo
import React, {useEffect, useState} from 'react';
import inf from "./Profileinfo.module.css"
import Preloader from "../../common/Preloader/Preloader";


const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
       setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
            <div>
            <b> Status:</b> <span onDoubleClick={activateEditMode}>  {props.status || "No status"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status}/>
            </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks
import React from "react";
import inf from './../Dialogs.module.css';

const Message = (props) => {
    return (

        <div className={inf.dialog}>{props.message}</div>
    )
}
export default Message

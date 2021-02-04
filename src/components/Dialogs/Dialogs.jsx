import React from "react";
import inf from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {reduxForm} from "redux-form";
import AddMessageForm from "./AddMessageForm/AddMessageForm";



const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);

    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);

    let addNewMessage = (values)=> {
        props.SendMessage(values.newMessageText);
    }

    return (
        <div className={inf.dialogs}>
            <div className={inf.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={inf.messages}>
                    <div>{messagesElements}</div>
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)
export default Dialogs

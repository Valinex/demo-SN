import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utilities/validators/Validators";


const maxLength100 = maxLengthCreator(100)

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} placeholder={"Enter your Message"} name={"newMessageText"}
            validate={[required, maxLength100]}/>
        </div>
        <div><button>Send</button></div>
    </form>
}
export default AddMessageForm;


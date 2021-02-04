import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import inf from "./Profileinfo.module.css"
import style from "./../../common/FormsControls/FormsControls.module.css"


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
        </div>
        {error && <div className={style.formErrorLogin}>
            {error}
        </div>
        }
        <div>
            <b>Full name </b>- <Field placeholder={"Full name"} name={"fullName"}
                                      component={Input} validate={[]}/>
        </div>
        <div>
            <b> About me</b>:
            <Field name={"aboutMe"} component={Textarea} validate={[]}/>
        </div>
        <div>
            <b> Looking for a job</b>: <Field name={"lookingForAJob"} component={Input} type={"checkbox"} validate={[]}/>
        </div>
        <div>
            <b>Professional skills</b>:
            <Field placeholder={"Your skills"} name={"lookingForAJobDescription"} component={Textarea} validate={[]}/>
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={inf.contact}>
                <b>{key}: <Field placeholder={key} name={"contacts." + key} component={Input} validate={[]}/></b>
            </div>
        })
        }
        </div>
    </form>
}
const profileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default profileDataReduxForm
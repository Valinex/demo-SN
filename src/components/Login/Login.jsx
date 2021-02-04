import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utilities/validators/Validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import inf from "./../common/FormsControls/FormsControls.module.css"


const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={inf.loginForm}>
        <div>
            <Field placeholder={"Email"} name={"email"} component={Input}
                   validate={[required]}/>
        </div>
        <div>
            <Field placeholder={"Password"} name={"password"} component={Input} type={"password"}
                   validate={[required]}/>
        </div>
        <div className={inf.rememberMe}>
            <Field type={"checkbox"} name={"rememberMe"} component={Input}/> &nbsp;  Remember me
        </div>
        {props.captchaUrl && <img src={props.captchaUrl}/>}
        {props.captchaUrl && <Field placeholder={"Symbols"} name={"captcha"} component={Input}
                                    validate={[required]}/>}
        <div>
            <button className={inf.buttonLogin}>Login</button>
        </div>
        {props.error && <div className={inf.formErrorLogin}>
            {props.error}
        </div>
        }
    </form>
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1 className={inf.wordLogin}>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)
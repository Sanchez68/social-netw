import React from "react";
import {reduxForm} from "redux-form";
import {Field} from "redux-form/es";
import {Input} from "../common/FormsControl/FormsControl";
import {requiredField} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import Redirect from "react-router-dom/es/Redirect";
import style from "./../common/FormsControl/FormsControl.module.css"

const LoginForm = ({handleSubmit,error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Input}
                       validate={[requiredField]}
                       placeholder={"email"}
                       name={"email"}/>
            </div>
            <div>
                <Field component={Input}
                       validate={[requiredField]}
                       placeholder={"Password"}
                       type={"password"}
                       name={"password"}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"}/>remember me
            </div>
            {   error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>



        </form>)
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)
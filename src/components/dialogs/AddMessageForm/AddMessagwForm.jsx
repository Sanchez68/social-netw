import {maxLengthCreator, requiredField} from "../../../utils/validators";
import {Field} from "redux-form/es";
import {Textarea} from "../../common/FormsControl/FormsControl";
import React from "react";
import {reduxForm} from "redux-form";

const maxLength50 =maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea}
                   validate={[requiredField,maxLength50]}
                   name="newMessageBody"
                   placeholder="Enter your message"/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
    )
}
export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

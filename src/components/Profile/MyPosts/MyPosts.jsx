import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field} from "redux-form/es";
import {reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControl/FormsControl";

const maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo(props => {
    console.log("adr")

    let postsElements = props.posts.map(p =>
        <Post message={p.message} likes={p.likes}/>)

    let onAddPost = (values) => {
        props.addPost(values.addPostTextName)
    }
    return (

        <div className={s.content}>
            <div>
                My posts
                <div>
                    <AddPostFormRedux onSubmit={onAddPost}/>
                </div>
                <div>
                    {postsElements}
                </div>
            </div>
        </div>
    )
});

const AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea}
                   name={"addPostTextName"}
                   placeholder={"Enter your text"}
            validate={[requiredField,maxLength10]}
            />
        </div>
        <div>
            <button>add post</button>
        </div>
    </form>
}

const AddPostFormRedux = reduxForm({form: "postAddMessageForm"})(AddNewPostForm)

export default MyPosts
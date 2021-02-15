import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/MessageItem";
import Redirect from "react-router-dom/es/Redirect";
import AddMessageForm from "./AddMessageForm/AddMessagwForm";


const Dialogs = (props) => {

    let state = props.dialogPage

    let dialogsElements = state.dialogs.map(d =>
        <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = state.messages.map(m =>
        <MessageItem text={m.text}/>)
    let newMessageBody = state.newMessageBody


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>


                </div>
            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    )
}

export default Dialogs
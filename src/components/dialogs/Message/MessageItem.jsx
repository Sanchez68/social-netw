import React from 'react';
import s from './../Dialogs.module.css'

const MessageItem = (props) => {
    //let AddMessageItem = React.createRef()

    // let addMassage = () => {
    //     let textMessage = AddMessageItem.current.value
    //     alert(textMessage)
    // }


    return (
        <div className={s.message}>{props.text}
        </div>
            )
}


export default MessageItem
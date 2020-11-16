import { auth } from 'firebase';
import React from 'react'

function ChatMessage(props) {
    const {text ,uid } = props.message;
    return (
        // id={key}
        <>
        <div className={`message `}>
           <p>{text}</p>
        </div>
        </>
    )
}

export default ChatMessage

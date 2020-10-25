import { auth } from 'firebase';
import React from 'react'

function ChatMessage(props) {
    const {text ,uid } = props.message;
    // const {key} =props.key;

    // const messageClass = uid === auth.currentUser.uid ? 'sent' : 'recieved';
    return (
        // id={key}
        <>
        {/* ${messageClass} */}
        <div className={`message `}>
            {/* <img src={photoURL} /> */}
           <p>{text}</p>
        </div>


        </>
    )
}

export default ChatMessage

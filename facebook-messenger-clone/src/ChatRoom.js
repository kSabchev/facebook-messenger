import * as firebase from "firebase";

import React, { useRef, useState } from "react";
import { db, auth } from "./firebase";
import ChatMessage from "./ChatMessage";
import Message from "./Message";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";

function ChatRoom() {
  // const [input, setInput] = useState("");

  const dummy = useRef();
  const messagesRef = db.collection("myMessages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [user] = useAuthState(auth);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  // const sendMessage = (event) => {
  //   event.preventDefault();

  //   db.collection("myMessages").add({
  //     message: input,
  //     username: username,
  //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //   });

  //   // all the logic to send the message goes here
  //   // setMessages([...messages, {username: username, message: input}]);
  //   setInput("");
  // };

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      username: user?.displayName,
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {/* <ChatMessage key={msg.id} message={msg} /> */}
        {messages && messages.map((msg) => <Message message={msg} />)}

        {/*   {messages.map((message) => (
        <Message message={message} username={username} />
      ))} */}
        <span ref={dummy}></span>
      </main>

      {/* <form onSubmit={sendMessage}>
  
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
  
        <button type="submit" disabled={!formValue}>🕊️</button>
  

      </form> */}

      {user && (
        <form>
          <FormControl>
            <InputLabel>Enter a message..</InputLabel>
            <Input
              value={formValue}
              onChange={(event) => setFormValue(event.target.value)}
            />
            <Button
              disabled={!formValue}
              variant="contained"
              color="primary"
              type="submit"
              onClick={sendMessage}
            >
              Send Message
            </Button>
          </FormControl>
        </form>
      )}
    </>
  );
}

export default ChatRoom;

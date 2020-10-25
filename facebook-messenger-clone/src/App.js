import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";

function App() {
  // useState - set shot term memory
  // set up a basic variable in react
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  // useEfect - snipet of code that gets executed on a condition
  useEffect(() => {
    //run code here..
    // if it`s blank inside [], this code runs ONCE when the app component loads

    setUsername(prompt("Please enter your name"));
  }, []); // condition

  useEffect(() => {
    // run once when app component loads

    // db.collection('messages').onSnapshot(snapshot =>{
    //   console.log(`------------`)
    //   console.log(snapshot.docs)
    //   console.log(`------------`)
    //   setMessages(snapshot.docs.map(doc => doc.data))
    // })
    db.collection("messages")
      .get()
      .then((querySnapshot) => {
        console.log( querySnapshot.docs.map((doc) => doc.data))
        setMessages(
          querySnapshot.docs.map((doc) => doc.data)
          // .forEach((doc) => {
          // console.log(doc.data());
        );
      });
  }, []);

  // console.log(input);
  // console.log(messages);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // all the logic to send the message goes here
    // setMessages([...messages, {username: username, message: input}]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>hello</h1>
      <h2> Wellcome {username}</h2>

      <form>
        <FormControl>
          <InputLabel>Enter a message..</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>
      {/* messages */}

      {messages.map((message) => (
        <Message message={message} username={username} />
      ))}
    </div>
  );
}

export default App;

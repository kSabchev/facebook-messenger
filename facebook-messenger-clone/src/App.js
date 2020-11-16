import React, { useState, useEffect } from "react";
import "./App.css";
import { auth } from "./firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import ChatRoom from "./ChatRoom";

function App() {
  // useState - set shot term memory
  // set up a basic variable in react
  // const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  // const [username, setUsername] = useState("koko");

  // db, auth imported from firebase.js
  const [user] = useAuthState(auth);
  
  // snipet of code that gets executed on a condition
  // useEffect(() => {
  //   //run code here..
  //   // if it`s blank inside [], this code runs ONCE when the app component loads

  return (
    <div className="App">
      <header></header>
      <section>
        {user ? <SignOut /> : <SignIn />}
      </section>
      <ChatRoom/>
    </div>
  );
}

export default App;

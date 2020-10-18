import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(['hi']);

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    // all the logic to send the message goes here
    setMessages([...messages, input]);
    setInput('')
  };

  return (
    <div className="App">
      <h1>hello</h1>

      <input value={input} onChange={(event) => setInput(event.target.value)} />
      <button onClick={sendMessage}>Send Message</button>
      
      {/* messages */}
    </div>
  );
}

export default App;

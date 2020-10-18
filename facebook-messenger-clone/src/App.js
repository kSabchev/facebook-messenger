import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Message from './Message';


function App() {

  // useState - set shot term memory
  // set up a basic variable in react
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {username: 'test' , text: 'hey'},
    {username:'test2', text:"yoo"}
  ]);
  const [username,setUsername] = useState("");

  // useEfect - snipet of code that gets executed on a condition
  useEffect(()=>{

    //run code here..
    // if it`s blank inside [], this code runs ONCE when the app component loads

    setUsername(prompt('Please enter your name'));
  },[]) // condition


  // console.log(input);
  // console.log(messages);


  const sendMessage = (event) => {
    event.preventDefault();

    // all the logic to send the message goes here
    setMessages([...messages, {username: username, text: input}]);
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

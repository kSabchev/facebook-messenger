import { CardContent, Typography, Card } from "@material-ui/core";
import React from "react";
import { auth } from "./firebase";
import "./Message.css";

import { useAuthState } from "react-firebase-hooks/auth";


function Message({ message, uid }) {
  
  const [user] = useAuthState(auth);
  const isUser = message.username === user?.displayName;
  
  const {text } = message;

  return (
    
    <div className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {user?.username}
            {message?.username}:{text} 
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;

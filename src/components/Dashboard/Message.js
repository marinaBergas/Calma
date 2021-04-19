import { Card, CardContent, Typography } from "@material-ui/core";
import React , {forwardRef} from "react";
import './Message.css'

const Message=forwardRef(({message,username} ,ref)=> {
  const isuser= message.username===username;

  return (
    <div ref={ref} className={`message ${isuser && 'message__user'}`}>
    <Card className={isuser? 'message__usercard':'message__guestcard'}>
      <CardContent>
        <Typography color="white" variant="h5" content="h2">
          {message.username}:{message.message}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
})

export default Message;

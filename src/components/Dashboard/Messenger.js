import React, { useState } from "react";
import { useEffect } from "react";

import Button from "@material-ui/core/Button";
import { FormControl, InputLabel, Input, TableHead } from "@material-ui/core";
import Message from "./Message";
import db from "./Firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

function Messenger() {
  const [input, setInput] = useState("");
  const [messages, setmessages] = useState([]);
  const [username, setusername] = useState();

  useEffect(() => {
    setusername(prompt("please enter your name"));
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setmessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div>
      <img
        src="https://scontent-hbe1-1.xx.fbcdn.net/v/t1.6435-9/71518319_101599891245959_3677227711798968320_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFrNS6kk3NvYCWfS_wmrhqso1-yvaDpno2jX7K9oOmeja7ZriRpfZxcc25MolJJFrcFIi2ib3RLWqnSutI0kXeB&_nc_ohc=iwhB6rhSlaoAX-D0LyG&_nc_ht=scontent-hbe1-1.xx&oh=d958008982082da5730aa1476530c017&oe=60A04AD5"
       style={{height:'200px' , width:'150px'}}
      ></img>
      <form>
        <FormControl>
          <InputLabel>Enter Message</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!input}
            onClick={sendMessage}
          >
            Send
          </Button>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Messenger;

import React, { useEffect, useState, useRef } from 'react'
import './App.css'
import './components/Form.css'
import firebase from 'firebase/compat/app'
import db from './firebase'
import Message from './components/Message.js'
import FlipMove from 'react-flip-move'
import { FormControl } from '@mui/base'
import { IconButton, Input } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';


function App() {

  const [input, setInput] = useState("");
  const [username, setUsername] = useState();
  const [messages, setMessages] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('messages').add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput("");
  }

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      })
  }, [])

  useEffect(() => {
    setUsername(prompt("Enter your user name"));
  }, [])


  return (
    <div className="App">
      <h2>Welcome {username}</h2>
      <form className='form'>
        <FormControl className='formControl'>
          <Input className='form_input' placeholder='Enter the message...' value={input} onChange={handleInput} />
          <IconButton className='form_button' type='submit' onClick={sendMessage} disabled={!input}>
            <SendIcon />
          </IconButton>
        </FormControl >
      </form>
      <div className="msg_container">

        <FlipMove>
          {
            messages.map(({ id, message }) => (
              <Message key={id} username={username} message={message}></Message>
            ))
          }
        </FlipMove>
      </div>
    </div>

  )
}

export default App
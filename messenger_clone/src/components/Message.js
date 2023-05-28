import React, { forwardRef } from 'react'
import './Message.css'
import { Card, CardContent, Typography } from '@mui/material'

const Message = forwardRef(({ username, message }, ref) => {
  const isUser = message.username === username;
  return (
    <div ref={ref} className={`message ${isUser && `message_user`}`}>
      <Card className={isUser ? `message_userCard` : `message_guestCard`}>
        <CardContent>
          <Typography color="black" variant="h5" component="h2">
            {!isUser && `${message.username === null ? "Unknown User" : message.username} :`} {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>

  )
})

export default Message
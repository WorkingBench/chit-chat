import {
  useState,
  useContext
} from 'react'

import { SocketContext } from '../../context/socket'

export default function MessageInput(props) {
  const socket = useContext(SocketContext)
  const [message, setMessage] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    socket.emit('sendMessage', message, (error) => {

      if (error) {
        return console.log(error)
      }
  
      console.log('Message delivered!')
    })
  }
  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
      />
      <input type="submit" value="Send" />
    </form>
  )
}
import {
  useContext,
  useEffect,
  useState
} from 'react'
import {
  useParams
} from 'react-router-dom'

import { SocketContext } from '../context/socket'
import { usePageTitle } from '../utils/hooks'
import MessagesBox from '../components/Chat/MessagesBox'
import MessageInput from '../components/Chat/MessageInput'


export default function Chat({ onDisconnect }) {
  const socket = useContext(SocketContext)
  const { username, room } = useParams()
  const [messages, setMessages] = useState([])

  usePageTitle(`CHAT: ${room}`)
  useEffect(() => {
    socket.on('message', (message) => {
      console.log(message)
      const tempMessages = messages
      tempMessages.push(message)
      setMessages([...tempMessages])
    })
    return onDisconnect
  }, [])
  
  return (
    <div>
      <h1>
        This is the {room} CHAT room for {username}
      </h1>
      <MessagesBox messages={messages} />
      <MessageInput />
    </div>
  )
}
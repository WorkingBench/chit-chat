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
  const { room } = useParams()
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
    <div className="h-screen">
      <div className="h-full flex flex-col mx-2">
        <div className="flex-grow">
          <MessagesBox messages={messages} />
        </div>
        <div className="flex-none my-2 sticky bottom-1">
          <MessageInput />
        </div>
      </div>
    </div>
  )
}
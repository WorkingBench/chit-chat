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
    <div className="bg-white rounded-lg shadow-lg">
      <div className="px-4 py-5">
        <form 
          onSubmit={handleSubmit}
          className="flex"
        >
          <div className="flex-1 mr-3">
            <input
              type="text"
              value={message}
              onChange={handleMessageChange}
              className="border border-gray-300 w-full px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-green-200 focus:ring-1 focus:ring-green-200"
            />
          </div>
          <div className="flex-initial">
            <button type="submit" className="px-3 py-1 rounded-lg shadow-lg bg-green-400 text-white
                      hover:bg-green-200 transform transition hover:-translate-y-0.5 ring ring-offset-2 ring-green-500 ring-offset-green-200 w-full">Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}
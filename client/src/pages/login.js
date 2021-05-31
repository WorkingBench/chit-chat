import { useState, useContext } from 'react'
import {
  Link,
  Redirect
} from 'react-router-dom'

import { usePageTitle } from '../utils/hooks'
import { SocketContext } from '../context/socket'

export default function Login() {
  const socket = useContext(SocketContext)
  const [toChat, setToChat] = useState(false)
  const [username, setUsername] = useState('')
  const [room, setRoom] = useState('')
  
  usePageTitle()

  const handleSubmit = (e) => {
    e.preventDefault()
    socket.emit('join', { username, room }, (error) => {
      if (error) {
        alert(error)
      }
      setToChat(true)
    })
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handleRoomChange = (e) => {
    setRoom(e.target.value)
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="mx-auto mb-5">
        <Link to="/" className="font-black italic text-4xl sm:text-5xl text-white uppercase">Chit-Chat</Link>
      </div>
      <div className="flex flex-initial flex-col items-center px-8 py-10 bg-white rounded-lg shadow-xl space-y-5 mx-2">
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-700">
            Connection Details
          </h2>
        </div>
        <form className="space-y-5 mb-0 w-full" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-gray-700">
              Username
            </label>
            <div>
              <input
                type="text"
                name="username"
                value={username}
                required
                onChange={handleUsernameChange}
                className="border border-gray-300 w-full px-1 py-2 rounded-lg shadow-sm focus:outline-none focus:border-green-200 focus:ring-1 focus:ring-green-200"
              />
            </div>
          </div>
          <div>
            <label htmlFor="room" className="block">
              Room
            </label>
            <div>
              <input
                type="text"
                name="room"
                value={room}
                required
                onChange={handleRoomChange}
                className="border border-gray-300 w-full px-1 py-2 rounded-lg shadow-sm focus:outline-none focus:border-green-200 focus:ring-1 focus:ring-green-200"
              />
            </div>
          </div>
          <div>
            <button type="submit" className="px-5 py-3 rounded-lg shadow-lg bg-green-400 text-white
                      hover:bg-green-200 transform transition hover:-translate-y-0.5 ring ring-offset-2 ring-green-500 ring-offset-green-200 w-full">
                        Join
            </button>
          </div>
        </form>
        {toChat && <Redirect to={`/chat/${username}/${room}`} />}
      </div>
    </div>
  )
}
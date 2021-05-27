import React from 'react'
import socketIOClient from 'socket.io-client'

export const socket = socketIOClient(process.env.SERVER_ENDPOINT || 'http://127.0.0.1:4000')
export const SocketContext = React.createContext()
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom'

import './index.css'
import { socket, SocketContext } from './context/socket'
import Home from './pages/home'
import Chat from './pages/chat'
import Login from './pages/login'
import NotFound from './pages/404'

export default function App() {
  useEffect(() => {
    return handleDisconnect
  }, [])
  const handleDisconnect = () => {
    socket.disconnect()
  }
  return (
    <SocketContext.Provider value={socket}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/chat/:username/:room">
            <Chat onDisconnect={handleDisconnect} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </SocketContext.Provider>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

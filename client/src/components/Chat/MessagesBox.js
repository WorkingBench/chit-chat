import Message from './Message'

export default function MessagesBox({ messages }) {
  const messagesList = messages.map((message, id) => {
    return <Message key={id} chatMessage={message} />
  })
  return (
    <div className="messages">
      { messagesList }
    </div>
  )
}
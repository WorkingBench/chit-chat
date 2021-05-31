import Message from './Message'

export default function MessagesBox({ messages }) {
  const messagesList = messages.map((message, id) => {
    return <Message key={id} chatMessage={message} />
  })
  return (
    <div className="flex flex-col space-y-1 my-5">
      { messagesList }
    </div>
  )
}
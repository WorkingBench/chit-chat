import Message from './Message'

const test = [
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "cama",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "and",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "cama",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "and",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "cama",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "and",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "cama",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "and",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "cama",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "and",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "cama",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "and",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "cama",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "and",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "cama",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "and",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "cama",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "and",
  },{
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "cama",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "and",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "cama",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "and",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "cama",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "and",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "cama",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "and",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "cama",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "and",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "cama",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "and",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "cama",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "and",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "cama",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "and",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "cama",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "and",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "cama",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "and",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "cama",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "and",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "cama",
  },
  {
    createdAt: 1622120688416,
    text: "Asdasda",
    username: "and",
  },
]

export default function MessagesBox({ messages }) {
  const messagesList = test.map((message, id) => {
    return <Message key={id} chatMessage={message} />
  })
  return (
    <div className="messages">
      { messagesList }
    </div>
  )
}
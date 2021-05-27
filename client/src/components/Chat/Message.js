export default function Message({ chatMessage }) {
  const { username, text, createdAt } = chatMessage
  return (
    <p>{username}({createdAt}): {text}</p>
  )
}
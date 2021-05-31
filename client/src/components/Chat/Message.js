import {
  useParams
} from 'react-router-dom'
import Moment from 'react-moment'

export default function Message({ chatMessage }) {
  const { username, text, createdAt } = chatMessage
  const { username: user } = useParams()
  return (
    <>
      { user === username ? 
        <div className="flex justify-end">
          <div className="flex flex-col font-light space-y-0.5">
            <div className="flex justify-end text-sm py-1"><p className="text-white font-normal">{username}</p></div>
            <div className="bg-green-400 rounded-lg shadow-md px-2 py-1">
              <p>{text}</p>
            </div>
            <div className="flex justify-end text-xs italic"><Moment unix format="h:mm a">{createdAt}</Moment></div>
          </div>
        </div> :
        <div className="flex justify-start">
          <div className="flex flex-col font-light space-y-0.5">
            <div className="flex justify-start text-sm"><p className="text-white font-normal">{username}</p></div>
            <div className="bg-gray-200 rounded-lg shadow-md px-2 py-1">
              <p>{text}</p>
            </div>
            <div className="flex justify-start text-xs italic"><Moment unix format="h:mm a">{createdAt}</Moment></div>
          </div>
        </div>
      }
    </>
    
  )
}
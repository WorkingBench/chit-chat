import { Link } from 'react-router-dom'
import { usePageTitle } from '../utils/hooks'

export default function Home(props) {
  usePageTitle('homepage')

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="relative flex flex-initial flex-col items-center px-8 py-10">
        <div className="absolute img-container -top-16 -left-4">
          <img src="/img/chat.png" className="w-1/3 animate-bounce float-left" />
        </div>
        <div className="absolute img-container -bottom-20 -right-4 md:-bottom-32 md:-right-10">
          <img src="/img/chat-mirror.png" className="w-2/4 float-right animate-bounce" />
        </div>
        <div className="z-10">
          <Link to="/" className="font-black italic text-4xl sm:text-5xl text-white uppercase">Chit-Chat</Link>
        </div>
        <div className="mt-6">
          <Link 
            to="/login"
            className="inline-block px-5 py-3 rounded-lg shadow-lg bg-green-400 text-white
                    hover:bg-green-200 transform transition hover:-translate-y-0.5 ring ring-offset-2 ring-green-500 ring-offset-green-200
                    "
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}
import { usePageTitle } from '../utils/hooks'

export default function NotFound(props) {
  usePageTitle(404)
  return (
    <h1>
      404 PAGE
    </h1>
  )
}
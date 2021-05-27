import {
  useLocation
} from 'react-router-dom'
import {
  useEffect
} from 'react'

function usePageTitle(title) {
  let location = useLocation()
  let pageTitle = title || location.pathname.replace('/', '')

  useEffect(() => {
    document.title = pageTitle.toUpperCase()
  })
}

export {
  usePageTitle
}
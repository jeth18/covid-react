import { useEffect, useState } from 'react'

export default function useScroll(initialState: number = 0) {

  const [scroll, setScroll] = useState(initialState)
  const [hidden, setHidden] = useState('button-hidden')

  function scrollListener() {
    const position = window.pageYOffset
    setScroll(position)

    if (scroll > 300) {
      return setHidden('button-top')
    } else if (scroll < 300) {
      return setHidden('button-hidden')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollListener)
    return () => window.removeEventListener('scroll', scrollListener)
  })

  return { hidden, scroll }
}

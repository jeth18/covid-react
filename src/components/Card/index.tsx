import { ReactChild, ReactChildren } from 'react'
import './card.css'

interface AuxProps {
  children: ReactChild | ReactChildren
}

export default function Card({children}: AuxProps) {
  return(
    <>
      {children}
    </>
  )
}

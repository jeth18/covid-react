import { RefObject, useEffect, useState } from 'react'

export default function useOpen(ref: RefObject<HTMLDivElement>) {

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const checkIfClickedOutside = (ev: MouseEvent) => {
      if (open && ref.current && !ref.current.contains(ev.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [open, ref])

  return {
    open,
    setOpen,
  }
}

import { useEffect, useState } from 'react'

export default function useOpen(ref: any) {

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
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

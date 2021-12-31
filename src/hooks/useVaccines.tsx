import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVaccines } from '../service/service.api'
import { initVaccines } from '../state/actionCreators'
import { RootState } from '../state/store'

export default function useVaccines() {
  const vaccines = useSelector((state: RootState) => state.vaccines)
  const [loading, setLoading] = useState<boolean>(false)
  const dispatch = useDispatch()

  useEffect(() => {
    async function getDatosVaccines() {
      try {
        let response: any[] = await getVaccines()
        response = await response
        dispatch(initVaccines(response))
        setLoading(true)
      } catch (error) {
        console.log('error', error)
      }
    }
    getDatosVaccines()
  }, [dispatch])

  return { vaccines, loading }
}

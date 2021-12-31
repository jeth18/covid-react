import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ICases } from '../interface/cases'
import { getCases } from '../service/service.api'
import { initCases } from '../state/actionCreators'
import { RootState } from '../state/store'

export default function useCases() {
  const cases = useSelector((state: RootState) => state.cases)
  const [loading, setLoading] = useState<boolean>(false)
  const dispatch = useDispatch()

  useEffect(() => {
    async function getDatosCases () {
      try {
        const response: ICases[] = await getCases()
        dispatch(initCases(await response))
        setLoading(true)
      } catch (error) {
        console.log('error', error)
      }
    }
    getDatosCases()
  }, [dispatch])

  return { cases, loading }
}

import React, { useEffect, useRef, useState} from 'react'
import Card from '../../components/Card'
import UpButton from '../../components/upButton'
import Loader from '../../components/loader'
import { Link } from 'react-router-dom'
import { ICases }  from '../../interface/cases'
import { getCases } from '../../service/service.api'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../state/store'
import { initCases } from '../../state/actionCreators'

import './cases.css'

export default function CasesPage () {

  const cases = useSelector((state: RootState) => state.cases)
  const [search, setSearch] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const refScrollUp:any = useRef()
  const dispatch = useDispatch()
  
  useEffect(() => {
      async function getDatosCases (){
        try {
          let response: ICases[] = await getCases()
          dispatch(initCases(await response))
          setLoading(true)
        } catch (error) {
          console.log('error', error)
        }
      }
      getDatosCases()
  }, [dispatch])

  function renderCartsCases () {
    return Object.values(cases)
    .filter((value) =>
      search === '' 
      ? true 
      : value.All.country?.toLowerCase().includes(search.toLocaleLowerCase()))
    .map((value, key) => {
      let prop:ICases =  value.All
      return (
        <Link key={key} 
          to={`/cases/${value.All.country}`} 
          style={{ textDecoration: 'none' }} 
          className='link-card'
          state={{from: value.All}}
        >
          <Card> 
            <div className='card-content'>
              <h4>
                {prop?.country ? prop.country :  'Global'}
              </h4>
              <p>Confirmados: {prop.confirmed} </p>
              <p>Fallecidos: {prop.deaths} </p>
            
              <p>Población: {prop.population}</p>
            </div>
          </Card>
        </Link>
      )
    }) 
  }

  function filterCountries (e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  return(
   <div className='content'>
     <div ref={refScrollUp} className='header-filter'>
       <div className='div-Suffix'>
         Country: 
       </div>
       <input type='text' className='input-filter' 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
           filterCountries(e)
        }
        />
     </div>
     <div>

      {loading ? 
          <div>
            {cases ? 
              <div>
                <div className='display-carts'>
                  {renderCartsCases()}
                </div>
                <UpButton refScrollUp={refScrollUp} />
              </div>  
            :
              <p>Error al recuperar los casos</p>
            }
          
          </div>
          : 
          <Loader />
      }
     </div>
   </div>
  )
}
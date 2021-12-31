import React, { useState} from 'react'
import Loader from '../../components/loader/Loader'
import useCases from '../../hooks/useCases'
import { renderCartsCases } from './cases'

import './cases.css'

export default function CasesPage () {

  const {cases, loading} = useCases()
  const [search, setSearch] = useState<string>('')

  function filterCountries (e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  return(
   <div className='content'>
      <div className='header-filter'>
        <div className='div-Suffix'>
          País:
        </div>
        <input
            type='text'
            className='input-filter'
            placeholder='Nombre país'
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
                  {renderCartsCases({search, cases})}
                </div>
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

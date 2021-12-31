import { useState } from 'react'
import Loader from '../../components/loader/Loader'
import useVaccines from '../../hooks/useVaccines'
import { renderCardsVaccines, setGlobal } from './vaccines'
import './vaccines.css'

export default function Vaccines() {

    const {vaccines, loading} = useVaccines()
    const [search, setSearch] = useState<string>('')

    function filterCountries(e: React.ChangeEvent<HTMLInputElement>) {
      setSearch(e.target.value)
    }

    return (
      <div>
          <div>
            {vaccines &&
              <div>
                {
                  Object.entries(vaccines).map(([key, value]) =>
                  key === 'Global' ? setGlobal(value, key) : null)
                }
              </div>
            }
          </div>
          <div className='content'>
            <div className='header-filter'>
              <div className='div-Suffix'>
                País:
              </div>
              <input
                placeholder='Nombre país'
                type='text'
                className='input-filter'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => filterCountries(e)}
              />
            </div>
            <div>
              {
                loading ?
                  <div>
                    {
                      vaccines ?
                        <div>
                          <div className='display-carts'>
                            {renderCardsVaccines({search, vaccines})}
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
      </div>
    )
}

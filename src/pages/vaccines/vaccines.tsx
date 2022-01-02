import { Link } from 'react-router-dom'
import nodata from '../../assets/fruncir-el-ceno.svg'
import world from '../../assets/world.png'
import Card from '../../components/Card'
import { IVaccines } from '../../interface/vaccines'

interface Data {
  search: string,
  vaccines: IVaccines[]
}

function renderCardsVaccines({search, vaccines}: Data) {

  const array: IVaccines[] = Object.values(vaccines)
  .filter((value) =>
    search === ''
    ? true
    : value.All.country?.toLowerCase().includes(search.toLocaleLowerCase()))

  if (array.length <= 0) {
    return (
      <div className='content'>
        <img src={nodata} alt='Sin datos' className='logo-img'/>
        <p>Sin resultados</p>
      </div>
    )
  } else {
    return(
        array.map((value, key) => {
          const prop =  value.All
          return (
            <Link
              key={key}
              to={`/vaccines/${value.All.country}`}
              style={{ textDecoration: 'none' }}
              className='link-card'
              state={{from: value.All}}
            >
              <Card>
                <div className='card-content'>
                  <h4>
                    {prop?.country ? prop.country :  'Global'}
                  </h4>
                  <div className='data-content'>
                    <p>Administered: </p>
                    <p>{prop.administered}</p>
                  </div>
                  <div className='data-content'>
                    <p>People vaccinated: </p>
                    <p>{prop.people_vaccinated}</p>
                  </div>
                  <div className='data-content'>
                    <p>People partially vacc:</p>
                    <p>{prop.people_partially_vaccinated}</p>
                  </div>
                </div>
              </Card>
            </Link>
          )
      })
    )
  }
}

function setGlobal(value: IVaccines, key: string) {
  return (
    <div className='data-content' key={key}>
      <img src={world} alt='wolrdimg' />
      <h4>Global</h4>
      <p>Personas vacunadas en el mundo</p>
      <progress value={value.All.people_vaccinated} max={value.All.population} />
      <div className='informacion'>
        <h5>Personas vacunadas: {value.All.people_vaccinated}</h5>
        <h5>Población: {value.All.population}</h5>
      </div>
    </div>
  )
}

export {renderCardsVaccines, setGlobal}

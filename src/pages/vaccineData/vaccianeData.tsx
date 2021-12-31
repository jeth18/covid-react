import { useLocation } from 'react-router-dom'

export default function VaccineData() {
  const location: any = useLocation()
  const data = location.state.from

  return (
    <div className='data-case'>
      <h1>
        {data.country}({data.abbreviation}) - Continente: {data.continent}{' '}
      </h1>
      <h2> Capital: {data.capital_city} </h2>
      <h3>
        Ultima actualización: {data.updated ? data.updated : 'Sin fecha'}{' '}
      </h3>
      <p> Ubicación: {data.location} </p>

      <h4>Personas vacunadas</h4>
      <progress value={data.people_vaccinated} max={data.population} />
      <div className='informacion'>
        <h5>Personas vacunadas: {data.people_vaccinated}</h5>
        <h5>Población: {data.population}</h5>
      </div>
    </div>
  )
}

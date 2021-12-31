import { useLocation } from 'react-router-dom'
import './caseData.css'

export default function CaseData() {
    const location: any = useLocation()
    const data = location.state.from

    return (
        <div className='data-case'>
            <h1> {data.country}({data.abbreviation}) - Continente: {data.continent} </h1>
            <h2> Capital: {data.capital_city} </h2>
            <h3> Ultima actualización: {data.updated ? data.updated : 'Sin fecha'} </h3>

            <p> Ubicación: {data.location} </p>

            <h3>Esperanza de vida: {data.life_expectancy} </h3>

            <h4>Muertes a la fecha de casos confirmados</h4>
             <div className='informacion'>
                <h5>Muertes: {data.deaths}</h5>
                <h5>Confirmados: {data.confirmed}</h5>
            </div>
            <progress value={data.deaths} max={data.confirmed}/>

            <h4>Casos confirmados</h4>
            <div className='informacion'>
                <h5>Confirmados: {data.confirmed}</h5>
                <h5>Total: {data.population}</h5>
            </div>
            <progress value={data.confirmed} max={data.population}/>

        </div>
    )
}

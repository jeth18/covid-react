import { Link } from 'react-router-dom'
import nodata from '../../assets/fruncir-el-ceno.svg'
import Card from '../../components/Card'
import { ICases } from '../../interface/cases'

interface Data {
  search: string,
  cases: ICases[],
}

function renderCartsCases ({search, cases }: Data) {

  const array: any[] = Object.values(cases)
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
        const prop = value.All
        return (
          <Link
            key={key}
            to={`/cases/${prop.country}`}
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
    )
  }
}

export { renderCartsCases }

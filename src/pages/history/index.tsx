import { useState } from 'react'
import Chart from 'react-google-charts'
import { useSelector } from 'react-redux'
import Loader from '../../components/loader'
import { getHistoryByCountryAndStatus } from '../../service/service.api'
import { RootState } from '../../state/store'
import './history.css'
interface Dictionary<T> {
  [Key: string]: T
}
interface Data {
  country: string,
  status: string
}

export default function History() {

  const theme = useSelector((state: RootState) => state.theme)
  const mapFechas: Dictionary<number> = {}
  const [loading, setLoading] = useState(false)
  const [dataTable, setDataTable] = useState([])
  const [search, setSearch] = useState(
    {
      country: '',
      status: '',
    }
  )

  let data: any = []

  function joinMonthYear(array: any[]): void {
    Object.entries(array).forEach(([key, value]) => {
      const yearMonth = new Date(key).getFullYear().toString() + '-' + new Date(key).getMonth().toString()
      mapFechas[yearMonth] ?
        mapFechas[yearMonth] += value
        :
        mapFechas[yearMonth] = value
    })

    // tslint:disable-next-line: forin
    for (let key in mapFechas) {
      data.push([key, mapFechas[key]])
    }
    data = data.reverse()
    data.unshift(['Data','Value'])
    console.log(data)
    setDataTable(data);
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const {country, status} = search
    if (country === '' || status === '') {
      console.log('Error data')
    } else {
      getHistoryData(search).then((res: any) => {
        joinMonthYear(res.All.dates)
      }).finally(() => {
        setLoading(true)
        console.log(loading)
      })
    }
  }

  async function getHistoryData(d: Data) {
    let response = await getHistoryByCountryAndStatus(d)
    response = await response
    return response
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.name
    const value = e.target.value
    setSearch((values) => ({...values, [name]: value}))
  }

  return (
    <div>
      <div className='filter'>
          <input
            type='text'
            placeholder='Nombre país'
            name='country'
            onChange={handleChange}
          />
          <select
            name='status'
            onChange={handleChange}
            value={search.status}
          >
            <option>---</option>
            <option value='deaths'>Muertes</option>
            <option value='confirmed'>Confirmados</option>
          </select>
          <button type='submit'onClick={handleSubmit}>Buscar</button>
      </div>
      {loading &&
         <div className="dataTable">
            <p>Historial de {search.status}</p>
            <Chart
              width={'100%'}
              height={'400px'}
              chartType='LineChart'
              loader={<Loader />}
              data={dataTable}
              // tslint:disable-next-line: jsx-no-multiline-js
              options={{
                chartArea: { 
                  height: '70%',
                  width: '80%'
                },
                hAxis: 
                  {   
                    slantedText: true, 
                    textStyle:{color: theme ? 'white' : 'black'}
                  },
                vAxis: { 
                  viewWindow: { min: 0, max: search.status === 'deaths' ? 10_000_000 : 100_000_000 },
                  textStyle:{color: theme ? 'white' : 'black'}
                  },
                legend: { position: 'none' },
                backgroundColor: theme ? '#555555' : 'white',
                borderRadius: '4px'
              }}
            />
         </div>
        }
    </div>
  )
}

import { useState } from 'react'
import Chart from 'react-google-charts'
import Loader from '../../components/loader'
import { getHistoryByCountryAndStatus } from '../../service/service.api'
interface Dictionary<T> {
  [Key: string]: T
}
interface Data {
  country: string,
  status: string
}

export default function History() {

  const mapFechas: Dictionary<number> = {}
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState(
    {
      country: '',
      status: '',
    }
  )
  const [dataTable, setDataTable] = useState([])

  let data: any = []

  function joinMonthYear(array: any[]): void {
    Object.entries(array).forEach(([key, value]) => {
      const yearMonth = new Date(key).getFullYear().toString() + '-' + new Date(key).getMonth().toString()
      mapFechas[yearMonth] ?
        mapFechas[yearMonth] += value
        :
        mapFechas[yearMonth] = value
    })

    data.push(['Date', 'Value'])
    // tslint:disable-next-line: forin
    for (let key in mapFechas) {
      data.push([key, mapFechas[key]])
    }
    setDataTable(data)
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
         <div>
            <p>Table</p>
            <Chart
              width={'100%'}
              height={'400px'}
              chartType='LineChart'
              loader={<div><Loader /></div>}
              data={dataTable}
              // tslint:disable-next-line: jsx-no-multiline-js
              options={{
                chartArea: { height: '80%', width: '90%' },
                hAxis: { slantedText: true },
                vAxis: { viewWindow: { min: 0, max: 2000 } },
                legend: { position: 'none' },
                backgroundColor: '#474747',
              }}
            />
         </div>
        }
    </div>
  )
}

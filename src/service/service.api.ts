import axios from 'axios'
import { environment } from '../env/enviroment'

function getCases(): Promise<any[]> {
  return axios
    .get(environment.url + '/cases')
    .then((response: any) => response.data)
    .catch((error: any) => console.error(error))
}

function getVaccines(): Promise<any[]> {
  return axios
    .get(environment.url + '/vaccines')
    .then((response: any) => response.data)
    .catch((error: any) => console.error(error))
}

function getHistoryByCountryAndStatus({country, status}: any): Promise<any[]> {
  return axios
    .get(environment.url + `/history?country=${country}&status=${status}`)
    .then((response: any) => response.data)
    .catch((error: any) => console.error(error))
}

export { getCases, getVaccines, getHistoryByCountryAndStatus }

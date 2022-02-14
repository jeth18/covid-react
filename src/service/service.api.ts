import axios from "axios";
import { environment } from "../env/enviroment";
import { ICases } from "../interface/cases";
import { IVaccines } from "../interface/vaccines";

function getCases(): Promise<ICases[]> {
  return axios
    .get(environment.url + "/cases")
    .then((response: any) => response.data)
    .catch((error: any) => console.error(error));
}

function getVaccines(): Promise<IVaccines[]> {
  return axios
    .get(environment.url + "/vaccines")
    .then((response) => response.data)
    .catch((error) => console.error(error));
}

function getHistoryByCountryAndStatus({
  country,
  status,
}: {
  country: string;
  status: string;
}): Promise<any[]> {
  return axios
    .get(environment.url + `/history?country=${country}&status=${status}`)
    .then((response) => response.data)
    .catch((error) => Response.error);
}

export { getCases, getVaccines, getHistoryByCountryAndStatus };

import axios from "axios";
import { environment } from "../enviroment/enviroment";

function getCases(): Promise<any[]> {
  return axios
    .get(environment.url + "/cases")
    .then((response: any) => response.data)
    .catch((error: any) => console.log(error));
}

function getVaccines(): Promise<any[]> {
  return axios
    .get(environment.url + "/vaccines")
    .then((response: any) => response.data)
    .catch((error: any) => console.log(error));
}

export { getCases, getVaccines };

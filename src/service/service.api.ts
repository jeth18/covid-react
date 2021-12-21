import axios from "axios";
import { environment } from "../enviroment/enviroment";

export default function getCases(): Promise<any[]> {
  return axios
    .get(environment.url + "/cases")
    .then((response: any) => response.data)
    .catch((error: any) => console.log(error));
}

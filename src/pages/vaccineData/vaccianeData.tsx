import { useLocation } from "react-router-dom";
import { IVaccines } from "../../interface/vaccines";

export default function VaccineData() {
    const location:any = useLocation();
    const data:IVaccines = location.state.from;

    return (
        <div className="data-case">
            <h1> {data.country}({data.abbreviation}) - Continente: {data.continent} </h1>
            <h2> Capital: {data.capital_city} </h2>
            <h3> Ultima actualización: {data.updated ? data.updated : "Sin fecha"} </h3>

            <p> Ubicación: {data.location} </p>

        </div>
    )
}
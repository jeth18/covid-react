import { useLocation } from "react-router-dom";
import { ICases } from "../../interface/cases";
import "./caseData.css";

/**
 * No me gusta esta manera
 */
interface LocationState {
  from: ICases["All"];
}

export default function CaseData() {
  const location = useLocation();
  console.log(location);
  const { from } = location.state as LocationState;
  return (
    <div className="data-case">
      <h1>
        {" "}
        {from.country}({from.abbreviation}) - Continente: {from.continent}{" "}
      </h1>
      <h2> Capital: {from.capital_city} </h2>
      <h3>
        {" "}
        Ultima actualización: {from.updated ? from.updated : "Sin fecha"}{" "}
      </h3>

      <p> Ubicación: {from.location} </p>

      <h3>Esperanza de vida: {from.life_expectancy} </h3>

      <h4>Muertes a la fecha de casos confirmados</h4>
      <div className="informacion">
        <h5>Muertes: {from.deaths}</h5>
        <h5>Confirmados: {from.confirmed}</h5>
      </div>
      <progress value={from.deaths} max={from.confirmed} />

      <h4>Casos confirmados</h4>
      <div className="informacion">
        <h5>Confirmados: {from.confirmed}</h5>
        <h5>Total: {from.population}</h5>
      </div>
      <progress value={from.confirmed} max={from.population} />
    </div>
  );
}

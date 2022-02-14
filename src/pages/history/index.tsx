import { useState } from "react";
import Chart from "react-google-charts";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import nodata from "../../assets/fruncir-el-ceno.svg";
import grafica from "../../assets/histograma-de-grafico.svg";
import Loader from "../../components/loader/Loader";
import { getHistoryByCountryAndStatus } from "../../service/service.api";
import { RootState } from "../../state/store";
import "./history.css";
interface Dictionary<T> {
  [Key: string]: T;
}
interface Data {
  country: string;
  status: string;
}

export default function History() {
  const theme = useSelector((state: RootState) => state.theme);
  const mapFechas: Dictionary<number> = {};
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dataTable, setDataTable] = useState([]);
  const [search, setSearch] = useState({
    country: "",
    status: "",
  });

  let data: any = [];

  function joinMonthYear(array: any[]): void {
    Object.entries(array).forEach(([key, value]) => {
      const yearMonth =
        new Date(key).getFullYear().toString() +
        "-" +
        new Date(key).getMonth().toString();
      mapFechas[yearMonth]
        ? (mapFechas[yearMonth] += value)
        : (mapFechas[yearMonth] = value);
    });
    // tslint:disable-next-line: forin
    for (const key in mapFechas) {
      data.push([key, mapFechas[key]]);
    }
    data = data.reverse();
    data.unshift(["Data", "Value"]);
    setDataTable(data);
  }

  const notify = (resolve: any) =>
    toast.promise(resolve, {
      pending: "Recuperando la información 🥱",
      success: "Listo 👌",
      error:
        "Hubo un error, escriba el nombre del país en ingles y la primera letra en mayuscula 🤯",
    });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(false);
    const { country, status } = search;
    if (country === "" || status === "") {
      console.log("Error data");
    } else {
      const resolve = getHistoryData(search)
        .then((res: any) => {
          if (Object.values(res).length > 1) {
            setError(true);
          } else {
            joinMonthYear(res.All.dates);
          }
        })
        .finally(() => {
          setLoading(true);
        });
      notify(resolve);
    }
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setSearch((values) => ({ ...values, [name]: value }));
  };

  async function getHistoryData(d: Data) {
    let response = await getHistoryByCountryAndStatus(d);
    response = await response;
    return response;
  }

  return (
    <div className="content">
      <div className="filter">
        <input
          type="text"
          placeholder="Nombre país, Ex. Spain"
          name="country"
          onChange={handleChange}
        />
        <select name="status" onChange={handleChange} value={search.status}>
          <option>---</option>
          <option value="deaths">Muertes</option>
          <option value="confirmed">Confirmados</option>
        </select>
        <button type="submit" onClick={handleSubmit}>
          Buscar
        </button>
      </div>
      {error ? (
        <div className="content">
          <img src={nodata} alt="Sin datos" className="logo-img" />
          <p>Sin resultados</p>
        </div>
      ) : dataTable.length !== 0 ? (
        loading ? (
          <div className="dataTable">
            <p>
              Historial de{" "}
              {search.status === "deaths" ? "Muertes" : "Confirmados"}
            </p>
            <Chart
              width={"100%"}
              height={"400px"}
              chartType="LineChart"
              loader={<Loader />}
              data={dataTable}
              // tslint:disable-next-line: jsx-no-multiline-js
              options={{
                pointSize: 5,
                lineWidth: 3,
                chartArea: {
                  height: "70%",
                  width: "80%",
                },
                hAxis: {
                  slantedText: true,
                  textStyle: { color: theme ? "white" : "black" },
                },
                vAxis: {
                  scaleType: "linear",
                  textStyle: { color: theme ? "white" : "black" },
                },
                backgroundColor: "transparent",
              }}
            />
          </div>
        ) : (
          <Loader />
        )
      ) : (
        <div className="content-img">
          <img src={grafica} alt="svg-grafica" className="logo-img" />
        </div>
      )}
    </div>
  );
}

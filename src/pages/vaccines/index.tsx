import { getVaccines } from "../../service/service.api"
import { useDispatch, useSelector} from "react-redux"
import { useEffect, useRef, useState } from "react";
import { initVaccines } from "../../state/actionCreators";
import { RootState } from "../../state/store";
import { IVaccines } from "../../interface/vaccines";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import UpButton from "../../components/upButton";
import Loader from "../../components/loader";
import './vaccines.css'
import world from "../../assets/world.png";

export default function Vaccines() {

    const vaccines = useSelector((state:RootState) => state.vaccines);
    const [search, setSearch] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const refScrollUp:any = useRef();
    const dispatch = useDispatch();
    
    useEffect(() => {
        async function getDatosVaccines(){
          try {
            let response: any[] = await getVaccines();
            response = await response;
            dispatch(initVaccines(response));
            setLoading(true);
          } catch (error) {
            console.log('error', error);
          }
        }
        getDatosVaccines();
    }, [dispatch]);

    function renderCardsVaccines() {
      return Object.values(vaccines)
      .filter((value) => {
        return search === "" 
        ? true 
        : value.All.country?.toLowerCase().includes(search.toLocaleLowerCase())
      })
      .map((value, key) => {
        let prop:IVaccines =  value.All;
        return (
          <Link key={key} 
            to={`/vaccines/${value.All.country}`} 
            style={{ textDecoration: 'none' }} 
            className="link-card"
            state={{from: value.All}}
          >
            <Card> 
              <div className="card-content">
                <h4>
                  {prop?.country ? prop.country :  "Global"}
                </h4>
                <div className="data-content">
                  <p>Administered: </p>
                  <p>{prop.administered}</p>
                </div>
                <div className="data-content">
                  <p>People vaccinated: </p>
                  <p>{prop.people_vaccinated}</p>
                </div>
                <div className="data-content">
                  <p>People partially vacc:</p>
                  <p>{prop.people_partially_vaccinated}</p>
                </div>
              </div>
            </Card>
          </Link>
        );
      }) 
    }

    
    function filterCountries(e: React.ChangeEvent<HTMLInputElement>) {
      setSearch(e.target.value);
    }

    function setGlobal(value:any) {
      return (
        <div className="data-content">
          <img src={world} alt="wolrdimg" />
          <h4>Global</h4>
          <p>Personas vacunadas en el mundo</p>
          <progress value={value.All.people_vaccinated} max={value.All.population} />
          <div className="informacion">
            <h5>Personas vacunadas: {value.All.people_vaccinated}</h5>
            <h5>Población: {value.All.population}</h5>
          </div>
        </div>
      )
    }

  return ( 
   <div>
      <div>
        {vaccines && 
            <div>
              {
                Object.entries(vaccines).map(([key,value]) => {
                  if(key === "Global") {
                    return (
                      setGlobal(value)
                    )
                  }
                })
              }
          </div>
        }
      </div>
      <div className="content">
        <div ref={refScrollUp} className="header-filter">
          <div className="div-Suffix">
            Country: 
          </div>
          <input type="text" className="input-filter" 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              filterCountries(e)
            }
            />
        </div>
        <div>
     
          {loading ? 
              <div>
                {vaccines ? 
                  <div>
                    <div className="display-carts">
                      {renderCardsVaccines()}
                    </div>
                    <UpButton refScrollUp={refScrollUp} />
                  </div>  
                :
                  <p>Error al recuperar los casos</p>
                }
              
              </div>
              : 
              <Loader />
          }
      </div>
      </div>
   </div>
  )
}
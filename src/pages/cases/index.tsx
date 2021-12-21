import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../../components/Cart";
import {Cases}  from "../../interface/cases";
import getCases from "../../service/service.api";
import up from '../../assets/cuadrado-de-angulo.svg';

import './cases.css';


export default function CasesPage() {

  const [cases, setCases] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [scroll, setScroll] = useState(0);
  const [hidden,setHidden] = useState("")
  const refScrollUp:any = useRef();

  useEffect(() => {
      async function getDatosCases(){
        let response: Cases[] = await getCases();
        setCases(response);
        setLoading(true);
      }
      getDatosCases();
  }, [])

  useEffect(()=> {
    window.addEventListener("scroll",scrollListener)
  })

  function scrollListener(){
    const position = window.pageYOffset;
    setScroll(position);

    if (scroll > 300) {
      return setHidden("button-top");
    } else if (scroll < 300) {
      return setHidden("button-hidden");
    }
  }

  function handleScrollUp(){
    refScrollUp.current.scrollIntoView({ behavior: "smooth" });
  };

  function renderCartsCases() {
    return Object.values(cases)
    .filter((value) => {
      if(search === "") {
        return value;
      } else if(value.All.country?.toLowerCase().includes(search.toLocaleLowerCase())){
        return value;
      }
    })
    .map((value, key) => {
      return (
        <Link key={key} 
          to={`/cases/${value.All.country}`} 
          style={{ textDecoration: 'none' }} 
          className="link-card"
          state={{from: value.All}}
        >
          <Cart key={key} {...value.All}/>
        </Link>
      );
    }) 
  }

  function filterCountries(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return(
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
      {cases && loading ? 
          <div className="display-carts">
            {renderCartsCases()}
          </div>
          : 
          <p>Error al recuperar los datos</p>
      }
     </div>
     <div className={hidden}>
        <button onClick={() => handleScrollUp()}>
          <img src={up} alt="menu" />
        </button>
     </div> 
   </div>
  )
}
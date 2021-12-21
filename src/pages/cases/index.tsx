import React, { useEffect, useState } from "react";
import Cart from "../../components/Cart";
import {Cases}  from "../../interface/cases";
import getCases from "../../service/service.api"

import './cases.css';


export default function CasesPage() {

  const [cases, setCases] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
      async function getDatosCases(){
        let response: Cases[] = await getCases();
        setCases(response);
        setLoading(true);
      }
      getDatosCases();
  }, [])

  function renderCartsCases() {
    return Object.values(cases).map((value, key) => {
      return (
        <Cart key={key} {...value.All}/>
      );
    }) 
  }

  function filterCountries(e: React.ChangeEvent<HTMLInputElement>) {
    let data:any = Object.values(cases).filter((value) => {
      let c: Cases = value.All;
      return (
        c.country?.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
      )
    })
    console.log(data)
    setCases(data);
  }

  return(
   <div className="content">
     <div className="header-filter">
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
   </div>
  )
}
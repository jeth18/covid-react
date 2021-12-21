import React from "react"
import { NavLink, useLocation } from "react-router-dom"
import { Cases } from "../../interface/cases";

import './cart.css'

export default function Cart(prop: Cases) {
  return(
      <div className="cart-content">
        <h3>
          {prop?.country ? prop.country :  "Global"}
        </h3>
        <p>Confirmados: {prop.confirmed} </p>
        <p>Fallecidos: {prop.deaths} </p>
      
        <p>Población: {prop.population}</p>
      </div>
  )
}
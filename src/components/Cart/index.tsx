import React from "react"
import { Cases } from "../../interface/cases"

import './cart.css'

export default function Cart(prop: Cases) {
  return(
    <div className="cart-content">
      <p>{prop.country || "Sin nombre"}</p>
    </div>
  )
}
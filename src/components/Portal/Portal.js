import { useState, createContext, useContext } from "react";
import { QuickViewContext } from "../ProductCard/ProductCard";
import QuickView from "../QuickView/QuickView"



function Portal() {
    const QuickViewContextData = useContext(QuickViewContext)
    console.log(QuickViewContextData)

  return (
    <>
        {/* <QuickView product={QuickViewContextData}/> */}
        <h1>{QuickViewContextData}</h1>
    </>
  )
}

export default Portal
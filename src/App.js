import React from "react"
import Hero from "./components/Hero"
import Plan from "./components/Plan"
import Payment from "./components/Payment"

export default function App(){
    return(
        <div className="div--main">
           <Hero/>
           <Plan/>
           <Payment/>
        </div>
    )
}
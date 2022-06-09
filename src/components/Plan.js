import React from "react"

export default function Plan(){
    return(
       <div>
        <plan>
           <img src="./images/icon-music.svg" className="music--img" alt="music icon"/>
           <div className="div--price">
               <h2>Annual Plan <br></br><span class= "pricee">$59.99/year</span></h2>
               {/* <h2>$59.99/year</h2> */}
           </div>
           <a className="change" href="#">Change</a>
        </plan>
       </div>
    )
}

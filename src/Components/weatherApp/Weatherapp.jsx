import React from 'react'
import './Weatherappcss.css'
import clear from '../Asset'
import cloud from '../Asset'
import drizzle from '../Asset'
import humidity from '../Asset'
import rain from '../Asset'
import search from '../Asset'
import snow from '../snow'
import wind from '../wind'
export const Weatherapp = () => {
  return (
   
     <div className="container">

        <div className="topbar">
            <div className="city">
                <input type="text" className="cityinput" />
                <div className="searchicon">
                 <image className="src">
 
                 </image>
  <p>hey chen</p>
                </div>
            </div>
        </div>
     </div>
  )
}
export default Weatherapp;
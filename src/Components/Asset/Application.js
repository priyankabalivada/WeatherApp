import React from 'react'
import './Applicationcss.css'
import s from './search.png'
import c from './cloud.png'
import hu from './humidity.png'
import w from './wind.png'
export const Application = () => {
 let apikey="cdfb57c244afd31c38845f477566c41f";
 const search=async()=>{
 const element=document.getElementsByClassName("cityinput");
  if(element[0].value===""){
    return 0;
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${apikey}`;

  let response=await fetch(url);
  let data= await response.json();
  const humidity=document.getElementsByClassName("humidity-percentage");
  const temp=document.getElementsByClassName("temp");
  const wind=document.getElementsByClassName("wind-percentage");
  const city=document.getElementsByClassName("citya");

  
  humidity[0].innerHTML = `${data.main.humidity}%`;
  temp[0].innerHTML = `${data.main.temp}°C`;
  wind[0].innerHTML = `${data.wind.speed} m/s`;
  city[0].innerHTML = data.name;



 }



    return (

        <div className="container">
     
           <div className="toplllllbar">
           
              
                   <input type="text" className="cityinput" />
                   <div className="searchicon"><img onClick={search} src={s}  alt=""></img>
                   
                  
               </div>
           </div>
           <div className="cloud">
            <img src={c} alt=""></img>
           </div>
           <div className="temp"><h1>24</h1>
           </div><div className="diff">
          <div className='citya'> <h2>London</h2></div><div className='data-container' alt=''>
           <div className="element">
            <img src={hu} alt=""></img><br/>
           <div className='data'><div className='humidity-percentage'>18</div><center><div className='h12'>Humidity</div></center></div></div>
          <div className="element">
            <img src={w} alt=""></img>
            <div className="data">
           <div className='wind-percentage'>18</div><div className='h12'>wind spped</div></div></div></div>
  </div>
        </div>
     )
   
}

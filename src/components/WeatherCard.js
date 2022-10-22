import React, {useEffect, useState } from "react";
import fog from '../images/mist.jpg';
import sunny from '../images/sunny.jpg';
import mist from '../images/mist.jpg';
import rain from '../images/rain1.jpg';
import snow from '../images/snow.jpg';
import cloud from '../images/cloudy.jpg';




const WeatherCard=({weatherData,getimg})=>{
    

    const {temp,humidity,pressure,weathermood,name,speed,country,sunset}=weatherData;
    const [mood,setMood]=useState("");

    
   


    let sec=sunset;
    let date=new Date(sec*1000);

    let timestr=`${date.getHours()}:${date.getMinutes()}`;

   
    
    useEffect(()=>{
        if(weathermood){
            switch (weathermood) {
                case "Clouds":
                    setMood("wi-day-cloudy");
                    getimg(cloud)
                    break;
                case "Haze":
                    setMood("wi-fog");
                    getimg(fog)
                    break;
                case "Clear":
                    setMood("wi-day-sunny");
                    getimg(sunny)
                    break;
                case "Mist":
                    setMood("wi-dust");
                    getimg(mist)
                    break;
                case "Snow":
                    setMood("wi-snow");
                    getimg(snow)
                    break;
                case "Rain":
                    setMood("wi-rain");
                    getimg(rain)
                    break; 
                default:
                    setMood("wi-day-sunny");
                    getimg(sunny)
                    break;
            }
        }

    },[weathermood]);


return(
    <>
    <article className="widget">
           <div className="wheather-icon">
             <i className={`wi ${mood}`}></i>
           </div>
           <div className="weather-info">
            <div className="temp">
                <span>{temp}&deg;</span>
            </div>
            <div className="description">
              <div className="weather-condition">
                 {weathermood}
              </div>  
              <div className="place">
                {name}, {country}
              </div>
            </div>
            
            <div className="date">
              {
                 new Date().toLocaleString()
              }
            </div>
            </div>
          <div className="extra-info">
            <div className="extra-info-minmax">
               <div className="two-sided">
                 <i className={"wi wi-sunset"}></i>
                 <p className="box-txt">
                    {timestr}<br></br>
                    sunset
                 </p>
               </div>
               <div className="two-sided">
                 <i className={"wi wi-humidity"}></i>
                 <p className="box-txt">
                    {humidity}<br></br>
                    Humidity
                 </p>
               </div>
               <div className="two-sided">
                 <i className={"wi wi-rain"}></i>
                 <p className="box-txt">
                    {pressure}<br></br>
                    Pressure
                 </p>
               </div>
               <div className="two-sided">
                 <i className={"wi wi-strong-wind"}></i>
                 <p className="box-txt">
                    {speed}<br></br>
                    Speed
                 </p>
               </div>
            </div>
          </div>
        </article>
    </>
)

}

export default WeatherCard;
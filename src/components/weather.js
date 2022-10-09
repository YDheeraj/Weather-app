import { useEffect, useState } from "react";
import "./style.css";
import WeatherCard from "./WeatherCard";


const Weather=()=>{

    const[inputdata,setinputdata]=useState("Meerut");
    const[weatherData,setweatherData]=useState({});

  const getweatherInfo= async()=>{
       try {
          let url=`https://api.openweathermap.org/data/2.5/weather?q=${inputdata}&units=metric&appid=6ac0a8651fbc75df440e0bc170071a1e`;
          
          const res= await fetch(url);
          const data= await res.json();
          const {temp,humidity,pressure}=data.main;
          const {main:weathermood}=data.weather[0];
          const {name}=data;
          const {speed}=data.wind;
          const {country,sunset}=data.sys;

          const weatherInfo={temp,humidity,pressure,weathermood,name,speed,country,sunset};
 
           setweatherData(weatherInfo);

       } catch (error) {
         console.log(error);
       }
  };


  useEffect(()=>{
    getweatherInfo();
  },[])

 const handle=(e)=>{
  if (e.key === "Enter") {
    document.getElementById("myBtn").click();
  }
 };

 

  const [image,setimage]=useState("/images/sunny.png");
  const {weathermood}=weatherData;
  useEffect(()=>{
    if(weathermood){
        switch (weathermood) {
            case "Clouds":
                
                setimage("/images/cloudy.jpg");
                break;
            case "Haze":
  
                setimage("/images/mist.jpg");
                break;
            case "Clear":
              
                setimage("/images/sunny.jpg");
                break;
            case "Mist":
    
                setimage("/images/mist.jpg");
                break;
            case "Snow":
    
                setimage("/images/snow.jpg");
                break;
            case "Rain":
    
                setimage("/images/rain.jpg");
                break; 
            default:
              
                setimage("/images/sunny.png");
                break;
        }
    }

},[weathermood]);

    return (
        <>
        <div className="div-for-back">
              <img src={image} alt="img"></img>
            </div>
        <div className="wrap">
           <div className="search">
               <input type="text" placeholder="Search..." id="search" value={inputdata} autoFocus onChange={(e)=>{
                   setinputdata(e.target.value) ;
               }} onKeyPress={handle}></input>
           </div>
           <button className="btn" id="myBtn" type="button" onClick={getweatherInfo}>
               Search
           </button>
           <WeatherCard weatherData={weatherData} ></WeatherCard>
        </div>
        </>
    )
}

export default Weather;
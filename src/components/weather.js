import "./style.css";


const Weather=()=>{

    return (
        <>
        <div className="wrap">
           <div className="search">
               <input type="text" placeholder="Search..." id="search" autoFocus></input>
           </div>
           <button className="btn" type="button">
               Search
           </button>
        </div>

        <article className="widget">
           <div className="wheather-icon">
             <i className={"wi wi-day-sunny"}></i>
           </div>
           <div className="weather-info">
            <div className="temp">
                <span>25.59&deg;</span>
            </div>
            <div className="description">
              <div className="weather-condition">
                 Sunny
              </div>  
              <div className="place">
                Pune,India
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
                    19:19PM<br></br>
                    sunset
                 </p>
               </div>
               <div className="two-sided">
                 <i className={"wi wi-humidity"}></i>
                 <p className="box-txt">
                    19:19PM<br></br>
                    sunset
                 </p>
               </div>
               <div className="two-sided">
                 <i className={"wi wi-rain"}></i>
                 <p className="box-txt">
                    19:19PM<br></br>
                    sunset
                 </p>
               </div>
               <div className="two-sided">
                 <i className={"wi wi-strong-wind"}></i>
                 <p className="box-txt">
                    19:19PM<br></br>
                    sunset
                 </p>
               </div>
            </div>
          </div>
        </article>
        </>
    )
}

export default Weather;
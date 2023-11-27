
import img1 from '../../img/img1.jpg'
import "./Main.css"

function Main(props) {
    let {location,temp,maxtemp,mintemp ,hours,min ,date,maxtemp2,mintemp2,maxtemp3,mintemp3,maxtemp4,mintemp4,maxtemp5,mintemp5,}= props


    if(hours<10){
        hours = "0"+hours
    }
    if(min<10){
        min = "0"+min
    }

    const weekday = Array(7)
    weekday[0] = "sun"
    weekday[1] = "mon"
    weekday[2] = "tue"
    weekday[3] = "wed"
    weekday[4] = "thu"
    weekday[5] = "fri"
    weekday[6] = "sat"
    weekday[7] = "sun"
    weekday[8] = "mon"
    weekday[9] = "tue"
    weekday[10] = "wed"
    const times = new Date()
    return (<>
        <div className="container">
            <div className='main-body'> </div>


            <div className="main-bodyinner">
                <img src={img1} alt="img" className='inner-img' />
                <div className="weather-box">
                    <div className="leftweather">
                        <form className="title">
                        {/* <input type="text" className='search' placeholder='search your city here' /> */}
                        {/* <button className='searchbtn'>search</button> */}
                        </form>
                        <div className="content">
                        <h1> {temp} <sup>0<span>c</span></sup> </h1>
                        <h2> {location} ☁️</h2>
                        <p style={{transition:"1ms ,ease"}}>date : {date} | Time:{hours}:{min} | day:{weekday[times.getDay()]} </p>
                        </div>
                        
                    </div>

                    <div className="rightweather">
                        {/* <div className="firstright">
                            <p>hello bhai kya ho raha hai </p>
                        </div> */}
                        <div className="secondright">
                            <p>5 day forcast</p>
                            <p>☁️  today low:{mintemp} <sup>0c</sup> || high:{maxtemp}  <sup>0c</sup></p>
                            <p>☁️ {weekday[times.getDay()+1]} low:{mintemp2}<sup>0c</sup>  || high: {maxtemp2} <sup>0c</sup></p>
                            <p>☁️ {weekday[times.getDay()+2]} low:{mintemp3} <sup>0c</sup> || high: {maxtemp3}  <sup>0c</sup></p>
                            <p>☁️ {weekday[times.getDay()+3]} low:{mintemp4} <sup>0c</sup> || high: {maxtemp4}  <sup>0c</sup></p>
                            <p>☁️ {weekday[times.getDay()+4]} low:{mintemp5} <sup>0c</sup> || high: {maxtemp5}  <sup>0c</sup></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

    )
}

export default Main

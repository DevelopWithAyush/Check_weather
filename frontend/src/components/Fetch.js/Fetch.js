import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';

function Fetch() {
  const [weatherData, setWeatherData] = useState({
    address: '',
    temp: '',
    maxtemp: '',
    mintemp: '',
    maxtemp2:"",
    mintemp2:"",
    maxtemp3:"",
    mintemp3:"",
    maxtemp4:"",
    mintemp4:"",
    maxtemp5:"",
    mintemp5:"",

  });

  const apikey = "DSUE4WKNWHM5785SJ2PHNH5QL";

  const fetchWeatherData = async () => {
    try {
      const success = async (position) => {
        const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`);
        const data = await res.json();
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${data.city}?key=${apikey}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }

        const parsedData = await response.json();
        setWeatherData({
          address: parsedData.address,
          temp: (Math.round(((parsedData.days[0].temp - 32) * 5 / 9) * 10)) / 10,
          maxtemp: (Math.round(((parsedData.days[0].tempmax - 32) * 5 / 9) * 10)) / 10,
          mintemp: (Math.round(((parsedData.days[0].tempmin - 32) * 5 / 9) * 10)) / 10,
          maxtemp2: (Math.round(((parsedData.days[1].tempmax - 32) * 5 / 9) * 10)) / 10,
          mintemp2: (Math.round(((parsedData.days[1].tempmin - 32) * 5 / 9) * 10)) / 10,
          maxtemp3: (Math.round(((parsedData.days[2].tempmax - 32) * 5 / 9) * 10)) / 10,
          mintemp3: (Math.round(((parsedData.days[2].tempmin - 32) * 5 / 9) * 10)) / 10,
          maxtemp4: (Math.round(((parsedData.days[3].tempmax - 32) * 5 / 9) * 10)) / 10,
          mintemp4: (Math.round(((parsedData.days[3].tempmin - 32) * 5 / 9) * 10)) / 10,
          maxtemp5: (Math.round(((parsedData.days[4].tempmax - 32) * 5 / 9) * 10)) / 10,
          mintemp5: (Math.round(((parsedData.days[4].tempmin - 32) * 5 / 9) * 10)) / 10,
        });
      };

      const error = () => {
        console.log("Some error occurred");
      };

      navigator.geolocation.getCurrentPosition(success, error);
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);
  let times = new Date()
  let tarik = times.getDate()
  let month = times.getMonth()
  let year = times.getFullYear()
  let completeyear = `${tarik}/${month}/${year}`
const [time ,settime] = useState({hours: times.getHours(), min: times.getMinutes() ,date : completeyear})





setInterval(() => {
  
 tarik = times.getDate()
 month = times.getMonth()
 year = times.getFullYear()
 completeyear = `${tarik}/${month}/${year}`
  settime({
    hours: times.getHours(),
    min: times.getMinutes(),
    sec:times.getSeconds(),
    date: completeyear
  })
  
},60*1000);  

  return (
    <>
      <Main
        location={weatherData.address}
        temp={weatherData.temp}
        maxtemp={weatherData.maxtemp}
        mintemp={weatherData.mintemp}
        hours = {time.hours}
        min = {time.min}
        sec = {time.sec}
        date = {time.date}
        maxtemp2 ={weatherData.maxtemp2}
        mintemp2 ={weatherData.mintemp2}
        maxtemp3 ={weatherData.maxtemp3}
        mintemp3 ={weatherData.mintemp3}
        maxtemp4 ={weatherData.maxtemp4}
        mintemp4 ={weatherData.mintemp4}
        maxtemp5 ={weatherData.maxtemp5}
        mintemp5 ={weatherData.mintemp5}
      />
    </>
  );
}

export default Fetch;

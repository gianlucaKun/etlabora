// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import './WeatherWidget.css'

// const API_KEY = "1b2c79a4455143cfbec112022242506";

// const WeatherWidget: React.FC = () => {
//   const [weatherData, setWeatherData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=milan&aqi=no`
//         );
//         setWeatherData(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.log("Error fetching weather data ", error);
//         setLoading(false);
//       }
//     };
//     fetchWeatherData();
//   }, []);

//   if(loading) {
//     return <div>Loading...</div>;
//   }

//   if (!weatherData) {
//     return <div>Error fetching weather data</div>;
//   }

//   return (
//     <div className="weather-widget">
//       <h2>{weatherData.location.name}</h2>
//       <div>
//         <strong>Temperature:</strong> {weatherData.current.temp_c} °C
//       </div>
//       <div>
//         <strong>Condition:</strong> {weatherData.current.condition.text}
//       </div>
//       <div>
//         <img src={weatherData.current.condition.icon} alt="Weather Icon" />
//       </div>
//     </div>
//   );
// };

// export default WeatherWidget;

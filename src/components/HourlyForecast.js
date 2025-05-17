import React from "react"; 
import {
  HourlyForecastWrapper,
  HourlyItem,
} from "./styles/StyledComponents"; 

import {
  getWeatherDescription,
  formatHourlyData,
} from "../utils/weather"; 

const HourlyForecast = ({ weatherData }) => {
  const hourlyData = formatHourlyData(weatherData); 

  return (
    <HourlyForecastWrapper>
      {hourlyData.map((data) => {
        const date = new Date(data.time); 
        const hour = date.getHours().toString().padStart(2, "0"); // 시간만 추출해서 2자리로 포맷 (예: 09)
        const temperature = Math.floor(data.temperature); 
        const description = getWeatherDescription(data.weatherCode); 

        return (
          <HourlyItem key={data.time}> 
            <div>{hour}시</div> 
            <div>{temperature}°C</div> 
            <div>{description}</div> 
          </HourlyItem>
        );
      })}
    </HourlyForecastWrapper>
  );
};

export default HourlyForecast; 

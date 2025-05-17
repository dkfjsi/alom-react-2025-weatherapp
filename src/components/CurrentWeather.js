import React from "react";
import {
  CurrentWeatherWrapper,
  Temperature,
  WeatherCode,
} from "./styles/StyledComponents";
import { getWeatherDescription } from "../utils/weather";

const CurrentWeather = ({ weatherData, isLoading }) => {
  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  const lastIndex = weatherData.hourly.time.length - 1;

  const temperature = weatherData.hourly.temperature_2m[lastIndex];
  const weatherCode = weatherData.hourly.weather_code[lastIndex];
  const description = getWeatherDescription(weatherCode);

  return (
    <CurrentWeatherWrapper>
      <Temperature>{temperature}°C</Temperature>
      <WeatherCode>{description}</WeatherCode>
    </CurrentWeatherWrapper>
  ) 
};

export default CurrentWeather;

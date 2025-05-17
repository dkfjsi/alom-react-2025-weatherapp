import React from "react";
import { DailyForecastWrapper, DailyItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatDailyData } from "../utils/weather";

const DailyForecast = ({ weatherData }) => {

  const dailyData = formatDailyData(weatherData);
  
  /* export const formatDailyData = (weatherData) => { ...
  const dailyData = [];
  for (let i = 0; i < 7; i++) {
    dailyData.push({
      time: time[i].toString(),
      temperature: temperature2mMax[i],
      weatherCode: weatherCode[i],
    });
  } */
  
  const days = ["월", "화", "수", "목", "금", "토", "일"];
  
return (
  <DailyForecastWrapper>
    {dailyData.map((data, idx) => {

      const date = new Date(data.time);
      /*data.time은 "2025-05-18" 같은 문자열.
      new Date()를 사용하면 이걸 날짜 객체로 바꿀 수 있음*/
      
      const month = date.getMonth() + 1;
      const day = date.getDate();
      
      const weekDay = days[date.getDay()];
      /* date.getDay() : 요일을 숫자로 반환 → 그래서 미리 만든 배열 days를 이용해서 
      한글 요일 이름으로 바꾸기*/ 
      
      const description = getWeatherDescription(data.weatherCode);
      const temperature = Math.floor(data.temperature);
      
      /*날씨 데이터에 있는 날짜 문자열 data.time을 진짜 날짜 객체(Date)로 바꾼 뒤, 
      "월, 일, 요일"을 뽑아내는 작업*/

//렌더링과정
      return (
        <DailyItem key={idx}>
          <div>{`${month}월 ${day}일 (${weekDay})`}</div>
          <div>{description}</div>
          <div>{temperature}°C</div>
        </DailyItem>
      );
    })}
  </DailyForecastWrapper>
);
};

export default DailyForecast;

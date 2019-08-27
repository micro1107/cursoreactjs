import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY,
} from '../../constants/weathers';
import './styles.css';

const data ={
  temperature: 5,
  weatherState: SUN,
  humidity: 90,
  wind: '10 Km/h',
}

const WeatherLocation = () => {
  return <div className="weatherLocationCont">
      <Location city = {'Cali'}>
      </Location>

      <WeatherData data={data}>
      </WeatherData>
  </div>
};

export default WeatherLocation;
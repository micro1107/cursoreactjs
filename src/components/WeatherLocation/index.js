import React, {Component} from 'react';
import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import {
  SUN,
} from '../../constants/weathers';
import './styles.css';

const location = 'Cali,co';
const api_key = '05bc2b42362b771fa0f7d990f0b3ba91';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather'

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data ={
  temperature: 5,
  weatherState: SUN,
  humidity: 90,
  wind: '10 Km/h',
}

class WeatherLocation extends Component {

  constructor(){
    super();
    this.state = {
      city: 'Cali',
      data: data,
    };
  }

  getTemp = kelvin =>{
    return convert(kelvin).from("K").to('C');
  };

  getWeatherState = weather_data => {
    return SUN; 
  };

  getData = weather_data =>{
    const {humidity, temp} = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = this.getWeatherState(weather_data);

    const data = {
      humidity,
      temperature: this.getTemp(temp),
      weatherState,
      wind: `${speed} m/s`,
    }
    return data;
  };

  handleUpdateClick = () =>{

    fetch(api_weather).then( resolve =>{
      return resolve.json();
    }).then( data =>{
      const newWeather = this.getData(data);
      this.setState({
        data: newWeather
      });
    });

    console.log("Actualizado");
  }

  render() {
    const {city, data} = this.state;
    return (
        <div className="weatherLocationCont">
          <Location city = {city}>
          </Location>

          <WeatherData data={data}>
          </WeatherData>

          <button onClick={this.handleUpdateClick}>
            Actualizar
          </button>
        </div>
      );
  }
};

export default WeatherLocation;
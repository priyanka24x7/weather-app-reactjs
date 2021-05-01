import React, {useState, useEffect} from 'react'
import './App.scss';

function App() {

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  const apiKey = '0061a36e15ccaddab96c348d8579f977';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`

  const getWeatherData = async () => {
    const res = await fetch(url);
    setCity(await res.json());
  }

  useEffect(() => {
    getWeatherData();
  },[search]);

  return (
    <>
      <div className="app-bg">
        <div className="s-box">
          <input type = "text" placeholder="Search city name"/>
        </div>
        <div className="temp-area">
          {
            !city ? (
              <p>No city found</p>
            ): (
              <div>
                <p class="city-name">{city.name}</p>
                <p class="temp">{city.main.temp}<sup>o</sup>C</p>
              </div>  
            )}
        </div>
      </div>
    </>
  );
}

export default App;

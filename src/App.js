import './App.css';
import TopLocations from './components/TopLocations';
import Inputs from './components/Inputs';
import LocationTime from './components/LocationTime';
import TempDetails from './components/TempDetails';
import getFormattedCurrentWeather from './services/weatherService';
import { useEffect, useState } from 'react';

function App() {

  const [query, setQuery] = useState({q: 'Toronto'})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedCurrentWeather({...query, units}).then(data => {
        setWeather(data);
      });
    };
  
    fetchWeather();
  }, [query, units]);

  return (
    <div className="mx-auto max-w-screen-md mt-4 p-4 lg:px-32 bg-gradient-to-br from-cyan-700 to-orange-500 hfit shadow-xl shadow-gray-400 rounded-3xl" >
      <TopLocations setQuery={setQuery}/>
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <LocationTime weather={weather}/>
          <TempDetails weather={weather}/>
        </div>
      )}

    </div>
  );
}

export default App;

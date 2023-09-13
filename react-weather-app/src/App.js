import './App.css';
import TopLocations from './components/TopLocations';
import Inputs from './components/Inputs';
import LocationTime from './components/LocationTime';
import TempDetails from './components/TempDetails';
import Forecast from './components/Forecast';
import { useState } from 'react';

function App() {

  const [city, setCity] = useState('')
  const [weatherInfo, setWeatherInfo] = useState(null)

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 hfit shadow-xl shadow-gray-400 rounded-3xl" >
      <TopLocations />
      <Inputs />

      <LocationTime />
      <TempDetails />

    </div>
  );
}

export default App;

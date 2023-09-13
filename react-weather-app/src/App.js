import './App.css';
import TopLocations from './components/TopLocations';
import Inputs from './components/Inputs';
import LocationTime from './components/LocationTime';
import TempDetails from './components/TempDetails';
import Forecast from './components/Forecast';

function App() {
  

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 hfit shadow-xl shadow-gray-400" >
      <TopLocations />
      <Inputs />

      <LocationTime />
      <TempDetails />
  
      <Forecast title="hourly forecast" />
      <Forecast title="daily forecast" />

    </div>
  );
}

export default App;

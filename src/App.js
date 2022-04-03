import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import CountryDetail from './components/CountryDetail';
import CountryList from './components/CountryList';
import Navbar from './components/Navbar';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState(null);
  useEffect(() => {
    async function getCountries() {
      let response = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      setCountries(response.data);
    }
    getCountries();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/countries"
          element={<CountryList allCountries={countries} />}
        />
        <Route
          path="/countries/:id"
          element={<CountryDetail allCountries={countries} />}
        />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CountryDetail() {
  const params = useParams();
  const [country, setCountry] = useState(null);
  useEffect(() => {
    async function getCountry() {
      let response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${params.id}`
      );
      console.log('single country', response.data);
      setCountry(response.data);
    }
    getCountry();
  }, [params.id]);

  if (!country) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h3>Country Detail</h3>
      <div>
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
          style={{ height: '50px' }}
          alt="country flag"
        />
        <h2>{country.name.common}</h2>
      </div>
    </div>
  );
}

export default CountryDetail;

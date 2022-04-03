import React from 'react';
import { Link } from 'react-router-dom';

function CountryList({ allCountries }) {
  if (!allCountries) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {allCountries.map((elem, i) => {
        return (
          <div className="container" key={elem + i}>
            <div className="row">
              <div
                className="col-5"
                style={{ maxHeight: '90vh', overflow: 'scroll' }}
              >
                <div className="list-group">
                  <div key={elem + i}>
                    <img
                      src={`https://flagpedia.net/data/flags/icon/72x54/${elem.alpha2Code.toLowerCase()}.png`}
                      style={{ height: '50px' }}
                      alt="country flag"
                    />
                    <Link to={elem.alpha3Code}>{elem.name.common}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CountryList;

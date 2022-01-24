import { useEffect, useState } from "react";
import { CountryPicker, Card, Chart } from "./components";
import styled from 'styled-components';
import { fetchData } from './api';
const image = require('./images/covidImage.png');

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');
  
  useEffect(() => {
    async function fetchFromAPI() {
      const fetchedData = await fetchData();
      setData(fetchedData);
    }
    fetchFromAPI();
  }, []);

  const handleCountryChange = async (country) => {
    setCountry(country);
    const fetchedData = await fetchData(country);
    setData(fetchedData);
    // console.log(fetchedData);
  }

  return (
    <AppStyled>
      <div className="header-image">
        <img src={image} alt='covid-19' />
      </div>
      <br />
      <br />
      <CountryPicker handleChange={handleCountryChange} />
      <Card data={data} />
      <Chart data={data} country={country} />
    </AppStyled>
  );
}

const AppStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .header-image {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 2rem;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export default App;

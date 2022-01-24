import { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchDailyData } from "../../api";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

function CovidChart({ data, country }) {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        async function fetchFromAPI() {
            const fetchedData = await fetchDailyData();
            setDailyData(fetchedData);
            // console.log(fetchedData);
        }
        fetchFromAPI();
    }, []);

    return (
        <ChartStyled>
            {country ? <BarChart data={data} country={country} /> : <LineChart dailyData={dailyData}/>}
        </ChartStyled>
    )
}

const ChartStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    margin: 1rem;
    @media screen and (max-width: 1200px) {
        width: 80%;
    }
    @media screen and (max-width: 1050px) {
        width: 90%;
    }
    @media screen and (max-width: 600px) {
        width: 95%;
    }
`;

export default CovidChart;
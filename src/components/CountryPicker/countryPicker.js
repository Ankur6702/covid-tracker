import { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchCountryData } from "../../api";

function CountryPicker({ handleChange }) {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        async function fetchCountries() {
            const response = await fetchCountryData();
            setFetchedCountries(response);
            // console.log(response);
        };
        fetchCountries();
    }, []);

    return (
        <CountryPickerStyled>
            <form>
                <select defaultValue="" onChange={(event) => handleChange(event.target.value)}>
                    <option value="">Global Data</option>
                    {fetchedCountries.map((country, i) => (
                        <option key={i} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
            </form>
        </CountryPickerStyled>
    )
}

const CountryPickerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    form {
        display: flex;
        align-items: center;
        justify-content: center;
        select {
            width: 100%;
            padding: 1rem;
            border: 1px solid #ccc;
            border-radius: 1.5rem;
            font-size: 1.1rem;
            font-family: inherit;
            font-weight: inherit;
            color: #333;
            background-color: #fff;
            box-shadow: 0px 0px 5px 0px #ccc;
            margin-bottom: 1rem;
        }
        option {
            font-size: 1rem;
        }
    }
`;

export default CountryPicker;
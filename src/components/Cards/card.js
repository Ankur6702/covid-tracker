import styled from "styled-components";
import CardComponent from "./CardComponent";

function Card({ data: { confirmed, recovered, deaths, lastUpdate } }) {
    if (!confirmed) {
        return 'Loading...';
    }
    return (
        <CardStyled>
            <div className="infected">
                <CardComponent
                    title="Infected"
                    value={confirmed.value}
                    lastUpdate={new Date(lastUpdate).toDateString()}
                />
            </div>
            {/* <div className="recovered">
                <CardComponent
                    title="Recovered"
                    value={recovered.value}
                    lastUpdate={new Date(lastUpdate).toDateString()}
                />
            </div> */}
            <div className="deaths">
                <CardComponent
                    title="Deaths"
                    value={deaths.value}
                    lastUpdate={new Date(lastUpdate).toDateString()}
                />
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    margin: 1.5rem;
    padding: 1rem;
    background-color: #000;
    border-radius: 1rem;
    @media screen and (max-width: 487px) {
        grid-template-columns: 3fr;
    }

    .infected {
        color: #ffa500;
    }

    .recovered {
        color: #32cd32;
    }

    .deaths {
        color: #ff0000;
    }
`;

export default Card;
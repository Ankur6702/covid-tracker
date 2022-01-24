import styled from "styled-components";
import CountUp from "react-countup";

function CardComponent({ title, value, lastUpdate }) {
    return (
        <CardComponentStyled>
            <h2 className="title">{title}</h2>
            <span className='number'> <CountUp start={0} end={value} duration={2} separator="," /></span>
            <span className="date">
                <p>Updated on:</p> 
                {new Date(lastUpdate).toDateString()}
            </span>
        </CardComponentStyled>
    )
}

const CardComponentStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: 1rem;
    padding: 1rem;
    background-color: #fff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);

    .title {
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
        color: #aaa;
    }

    .number {
        font-size: 0.9rem;
        font-weight: bold;
    }

    .date {
        font-size: 0.8rem;
        color: #aaa;
        p {
            font-size: 0.8rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;

export default CardComponent;
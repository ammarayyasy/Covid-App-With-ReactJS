import styled from "styled-components";

const HeroStyled = styled.div`
    margin: 5rem auto;
    padding: 1rem;

    section {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .hero__left {
        margin-bottom: 1rem;
    }

    /* Large Screen */
    @media (min-width: 992px) {
    max-width: 1200px;
   
    section {
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        text-align: left;
    }

    .hero__left {
        flex-basis: 50%;
    }

    .hero__right {
        flex-basis: 60%;
    }
    }
`;

export default HeroStyled;
import styled from "styled-components";

const RegionsStyled = styled.div`
    max-width: 1200px;
    margin: 3rem auto;

    section {
        margin: 5rem 0;
        text-align: center;
    }

    .box-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* Large Screen */
    @media (min-width: 992px) {
    .box-container {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
    }

    @media (min-width: 768px){
        .box-container{
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            flex-basis: 50%;
        }    
    }

`;

export default RegionsStyled
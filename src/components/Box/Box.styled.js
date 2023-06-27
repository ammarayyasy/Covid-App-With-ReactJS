import styled from "styled-components";

const BoxStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: whitesmoke;
    width: 300px;
    height: 300px;
    border-radius: 1rem;
    box-shadow: 0px 5px 4px 1px #ccc9c9;
    margin-bottom: 4rem;

    &:nth-of-type(1) .number {
        color: #06D6A0;
    }

    &:nth-of-type(2) .number {
        color: #118AB2;
    }

    &:nth-of-type(3) .number {
        color: #EF476F;
    }
`;

export default BoxStyled;
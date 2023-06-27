import styled from "styled-components";

const BoxRegionsStyled = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: whitesmoke;
        width: 320px;
        height: 320px;
        border-radius: 1rem;
        box-shadow: 0px 5px 4px 1px #ccc9c9;
        margin-bottom: 4rem;

    .box-group{
        width: 100%;
        display: flex;
        padding-left: 3rem;
        padding-right: 3rem;
        flex-direction: row;
        justify-content: space-between;
    }

`;

export default BoxRegionsStyled;
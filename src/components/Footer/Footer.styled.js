import styled from "styled-components";

const FooterStyled = styled.div`
    background-color: #086375;
    padding: 1rem;
    color: white;
    text-align: center;

    .footer__brand {
        margin-bottom: 3rem;
    }

    ul {
        list-style: none;
    }

    li {
        margin-bottom: 1rem;
    }

    /* medium sreen */
    @media (min-width: 768px) {
    footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }

    ul {
        display: flex;
        flex-direction: row;
    }

    li {
        margin: 0 1rem;
    }

    .footer__brand {
        margin: 0;
    }
    }

`;

export default FooterStyled;
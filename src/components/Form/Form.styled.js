import styled from "styled-components";

const FormStyled = styled.div`
    margin: 5rem 1rem;
    padding: 1rem;

    section {
        display: flex;
        flex-direction: column;
    }

    .form__left {
        display: none;
    }

    .form__group {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
    }

    label {
        margin-bottom: 1rem;
    }

    .form__input {
        outline: none;
        padding: 1rem 0.5rem;
        border-radius: 10px;
        border: 1px solid #64748b;
    }

    .form__input:focus {
        border: 1px solid #086375;
    }

    /* Large Screen */
    @media (min-width: 992px) {
    max-width: 1200px;
    margin: 5rem auto;

    section {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .form__left {
        display: block;
        flex-basis: 60%;
    }

    .form__right {
        flex-basis: 40%;
    }
    }
`;

export default FormStyled;
import styled from "styled-components";

const TableStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5rem;

    table {
        width: 600px;
    }

    table,
    th,
    td {
    border: 2px solid #64748b;
    padding: 1rem 0.5rem;
    }

    /* Medium Screen */
    @media (min-width: 768px) {
        table {
            width: 100%;
        }
    }

    /* Large Screen */
    @media (min-width: 992px) {
        table {
            width: 900px;
        }
    }

    
`;

export default TableStyled;
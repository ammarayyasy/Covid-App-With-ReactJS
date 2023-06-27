import styled from "styled-components";

const GlobalStyled = styled.div`
max-width: 1200px;
margin: 3rem auto;

section {
  margin: 5rem 0;
  text-align: center;
}

.global__container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Large Screen */
@media (min-width: 992px) {
  .global__container {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}

`;

export default GlobalStyled;
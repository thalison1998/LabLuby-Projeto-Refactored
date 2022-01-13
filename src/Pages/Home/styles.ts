import styled, { keyframes } from "styled-components";

const Focus = keyframes `
from{
transform: scale(1);
}
to{
  transform: scale(1.1)
}
`

export const Container = styled.main`
  section {
    max-width: 801px;
    margin: 65px auto 92px auto;
    display: gird;
    .wrapper-text {
      margin-bottom: 30px;
      h1 {
        font-weight: 600;
        font-size: 3rem;
        color: #495057;
      }
      p {
        font-weight: 500;
        font-size: 1.8rem;
        color: var(--colorTextBasic);
      }
    }
  }
  .card-text {
    padding: 30px;
    flex: 1;
    display: grid;
    align-self: stretch;
    gap: 44px;
    span {
      align-self: end;
      justify-self: end;
      font-weight: 700;
      font-size: 1.3rem;
      text-transform: uppercase;
      color: #f54a48;
    }
    h2 {
      font-weight: 600;
      font-size: 2.6rem;
      color: #495057;
      margin-bottom: 10px;
    }
    p {
      font-weight: 500;
      font-size: 1.8rem;
      color: var(--colorTextBasic);
    }
  }
  
  .link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border:1px var(--inputBorder) solid;
    &:hover{
      animation: ${Focus} .3s ease forwards ;
    }
  }
  .links{
    display: grid;
    gap:20px;
  }
`;

import styled from "styled-components";
import background from "../../assets/background.jpg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(360px, 1fr) minmax(300px, 1fr);
  height: 100vh;
  width: 100%;
  gap:20px;

  .bg-car {
    background: url(${background});
    background-position: center center;
    background-size: cover;
  }
`;

export const Main = styled.main`
  display: grid;
  justify-content: end;
  align-items: start;
  h1 {
    font-size: 3.8rem;
    font-weight: 600;
    line-height: 46px;
    letter-spacing: -0.03em;

    color: #3c3c3c;
  }
  section {
    display: grid;
    grid-template-columns: minmax(300px, 793px);
    margin-top: 70px;
    gap: 178px;
    padding-left:10px;
  }
  form {
    display: grid;
    grid-template-columns: minmax(300px, 425px);
    margin-left: 109px;
  }
  .wrapper-title p {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 14px;
    letter-spacing: -0.03em;
    color: var(--grey);
    margin-top: 6px;
  }
  .wrapper-title {
    margin-bottom: 70px;
  }
  button {
    width: 100%;
    height: 37px;
    border: none;
    border-radius: 3px;
    background-color: var(--red);
    color: var(--background);
    font-size: 1.4rem;
    font-weight: 700;

    &:hover {
      background-color: #df3938;
    }
    &:active {
      background-color: #df3938;
      border: 1.5px #971212 solid;
    }
  }
`;

export const RememberPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  color: var(--red);
  a {
    color: var(--red);
    padding: 10px 0;
  }
`;

export const CreateAnAccount = styled.div`
margin-top:40px;
margin-bottom:10px;


p{
  color:var(--veryGrey);
  font-weight:500;
  font-size:1.4rem;
  @media (max-width:760px){
        text-align: center;
    }
}
a{
  color:var(--red);
}
`

import React from "react";
import {
  BigButton,
  DivBigButton,
  H2Home,
  DivContainer,
  Header,
  DivH1Header,
  ButtonHeader
} from "./styled";
import { useHistory } from "react-router-dom";
import {goToListTripsPage, goToLoginPage } from "../../router/coordinator";

function HomePage() {
  const history = useHistory();


  return (
    <DivContainer>
      <Header>
        <DivH1Header>
          <h1>Enterprise</h1>
        </DivH1Header>
        <ButtonHeader onClick={() => goToLoginPage(history)}>
          {" "}
          Sou Administrador{" "}
        </ButtonHeader>
      </Header>
      <div>
        <H2Home> A agência de viagens que te leva até a fronteira final. </H2Home>

        <DivBigButton>
          <BigButton onClick={() => goToListTripsPage(history)}>
            <h3>Me inscrever em uma viagem espacial!!! </h3>
          </BigButton>
        </DivBigButton>
      </div>
    </DivContainer>
  );
  

}

export default HomePage;

import React from "react";
import { useHistory } from "react-router-dom";
import {
  AdmButtons,
  H2Home,
  DivButtonHome,
  DivContainer,
  Header,
  DivH1Header,
  ButtonHeader
} from "../../components/styled";
// import { useProtectPage } from "../../components/hooks/useProtectPage";
import {
  goToCreateTripPage,
  goToHome,
  goToListTripsAdm
} from "../../router/coordinator";

function HomeAdmPage() {
  const history = useHistory();
  // useProtectPage();

  return (
    <DivContainer>
      <Header>
        <DivH1Header>
          <h1>Agencia de Viagens Enterprise</h1>
        </DivH1Header>

        <ButtonHeader onClick={() => goToHome(history)}>
          {" "}
           Home{" "}
        </ButtonHeader>
      </Header>
      <div>
        <H2Home>
          Bem Vindo Administrador, aqui você poderá vizualizar e criar novas
          viagens, além de listar, aprovar ou rejeitar novas candidaturas.
        </H2Home>

        <DivButtonHome>
          <AdmButtons onClick={goToCreateTripPage(history)}>
            Cadastrar Novas Viagens
          </AdmButtons>

          <AdmButtons onClick={goToListTripsAdm(history)}>
            Gerenciar viagens e aprovações
          </AdmButtons>
        </DivButtonHome>
      </div>
    </DivContainer>
  );
}

export default HomeAdmPage;

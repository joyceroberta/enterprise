import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  H2Home,
  DivContainerList,
  CreateButton,
  DivH1Header,
  ButtonHeader,
  Header,
} from "../../components/styled";
import { useProtectPage } from "../../components/hooks/useProtectPage";
import { useHistory} from "react-router-dom";
import { goToHomeAdm } from "../../router/coordinator";
import { useRequestData } from "../../components/hooks/useRequestData";
import { baseUrl } from "../../constants/constants";
import TripsCardApproval from "../../components/tripsCardApproval";

function ListTripsPageAdm() {
  const history = useHistory();
  useProtectPage();

  const trips = useRequestData(`${baseUrl}/trips`, []);

  return (
    <DivContainerList>
      <Header>
        <DivH1Header>
          <h1>Agencia de Viagens Enterprise </h1>
        </DivH1Header>
        <ButtonHeader onClick={() => goToHomeAdm(history)}>
          {" "}
          Voltar para Home{" "}
        </ButtonHeader>
      </Header>

      <H2Home>Lista das Viagens Disponíveis</H2Home>

      {trips.length === 0 ? (
        <p>Nenhuma viagem cadastrada</p>
      ) : (
        trips.map((trip) => (
          <div>
            <TripsCardApproval
              id={trip.id}
              name={trip.name}
              planet={trip.planet}
              duration={trip.durationInDays}
              date={trip.date}
              description={trip.description}
            />
          </div>
        ))
      )}
    </DivContainerList>
  );
}

export default ListTripsPageAdm;

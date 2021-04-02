import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  H2Home,
  SubscribeButton,
  DivContainerList,
  Header,
  DivH1Header,
  ButtonHeader,
} from "../../components/styled";
import { useRequestData } from "../../components/hooks/useRequestData";
import TripsCard from "../../components/tripsCard";
import { goToHome } from "../../router/coordinator";
import { baseUrl } from "../../constants/constants";


function ListTripsPage() {
  const history = useHistory();

  const tripsUser = useRequestData(`${baseUrl}/trips`, []);

  return (
    <DivContainerList>
      <Header>
        <DivH1Header>
          <h1>Agencia de Viagens Enterprise</h1>
        </DivH1Header>

        <ButtonHeader onClick={() => goToHome(history)}>
          {" "}
          Voltar para Home{" "}
        </ButtonHeader>
      </Header>
      <H2Home>Lista das Viagens Disponíveis</H2Home>

      {tripsUser === 0 ? <p>Loading...</p> : tripsUser.map((trip)=>{
        return (
          <TripsCard 
          id={trip.id}
          name={trip.name}
          planet={trip.planet}
          date={trip.date}
          duration={trip.durationInDays}
          description={trip.description} 
          />
        )
      })}
    </DivContainerList>
  );
}

export default ListTripsPage;

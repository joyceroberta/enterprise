import { React, useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import {
  DivContainerList,
  H2Home,
  Image,
  Header,
  DivH1Header,
  ButtonHeader
} from "../../components/styled";
import check from "../../assets/img/check.png";
import cross from "../../assets/img/cross.png";
import { useProtectPage } from "../../components/hooks/useProtectPage";
import { goToListTripsPage } from "../../router/coordinator";
import { useRequestData } from "../../components/hooks/useRequestData";
import { baseUrl } from "../../constants/constants";

function TripDetailsPage() {
  const history = useHistory();
  const { id } = useParams();
  useProtectPage();

  const tripsApproval = useRequestData(`${baseUrl}/trip/${id}`, [])
  const [newCandidates, setNewCandidates] = useState([]);

    const aceptCandidate = (decision, candidatesId) => {
    const body = {
      approve: decision,
    };
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/joyce-dumont/trips/${id}/candidates/${candidatesId}/decide/`,
        body,
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then(() => {
        if (decision) {
          alert("Parabéns! Você foi aprovado para viajar com a Labe-X");
        } else {
          alert("Que pena! Tente uma próxima vez! :( ");
        }
      })

      .catch((error) => {
        console.log(error.message);
      });
  };

  console.log(newCandidates)

  return (
    <DivContainerList>
      <Header>
        <DivH1Header>
          <h1>Agencia de Viagens Enterprise </h1>
        </DivH1Header>

        <ButtonHeader onClick={() => goToListTripsPage(history)}>
          {" "}
          Voltar para Home{" "}
        </ButtonHeader>
      </Header>

      <H2Home>Aqui você pode gerenciar as inscrições para suas viagens</H2Home>

      <h3>{tripsApproval}</h3>

      <div>
        {newCandidates.length === 0 ? (
          <p>Nenhum Candidato Inscrito! :'( </p>
        ) : (
          newCandidates.map((candidate) => {
            return (
              <div>
                <p>Nome do Candidato: {candidate.name}</p>
                <p>Idade: {candidate.age}</p>
                <p>Profissão: {candidate.profession}</p>
                <p>Texto de inscrição: {candidate.applicationText}</p>
                <p>País: {candidate.country}</p>

                <Image
                  img
                  src={check}
                  onClick={() => aceptCandidate(true, candidate.id)}
                />
                <Image
                  img
                  src={cross}
                  onClick={() => aceptCandidate(false, candidate.id)}
                />
              </div>
            );
          })
        )}
      </div>
    </DivContainerList>
  );
}

export default TripDetailsPage;

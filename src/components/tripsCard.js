import { useHistory } from "react-router";
import { goToFormPage } from "../router/coordinator";
import { SubscribeButton } from "./styled";

const TripsCard = (props) => {
    const history = useHistory();

    return (
      <div>
        <p>Nome: {props.name}</p>
        <p>Planeta: {props.planet}</p>
        <p>Data da viagem:{props.date}</p>
        <p>Duração da Viagem:{props.durationInDays} dias </p>
        <p>Descrição da Viagem: {props.description} </p>

        <SubscribeButton onClick={() => goToFormPage(history, props.id)}>
          Inscreva-se{" "}
        </SubscribeButton>
      </div>
    );
}

export default TripsCard
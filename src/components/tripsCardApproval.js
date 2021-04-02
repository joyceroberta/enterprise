import { useHistory } from "react-router"
import { goToApproval } from "../router/coordinator"
import { CreateButton } from "./styled";

const TripsCardApproval = (props) =>{
    const history = useHistory()
   
    return (
      <div>
        <p>Nome: {props.name}</p>
        <p>Planeta: {props.planet}</p>
        <p>Data da viagem:{props.date}</p>
        <p>Duração da Viagem:{props.durationInDays} dias </p>
        <p>Descrição da Viagem: {props.description} </p>
        <CreateButton onClick={() => goToApproval(history, props.id)}>
          Aprovar inscrições
        </CreateButton>
      </div>
    );
}

export default TripsCardApproval;
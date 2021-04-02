import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { Header, ButtonHeader, DivH1Header, CreateButton, DivContainer, H2Home, DivRegister, InputForm } from "../../components/styled";
import { useProtectPage } from "../../components/hooks/useProtectPage"; 
import { useForm } from "../../components/hooks/useForm";
import { goToHomeAdm } from "../../router/coordinator";
import { createTrip } from "../../constants/trip";
import Planets from "../../assets/planets"


function CreateTripsPage() {
  const history = useHistory();
  const { id } = useParams();
  const { form, onChange } = useForm({
    id: "",
    name: "",
    description: "",
    planet: "",
    durationInDays: "",
    date: "",
  });


 const handleInputChange = (event) => {
   const { value, name } = event.target;

   onChange(value, name);
 };

 const handleSubmit = (event) => {
   event.preventDefault();
   createTrip(form, history);
 };

  useProtectPage();


  return (
    <DivContainer>
      <Header>
        <DivH1Header>
          <h1>Agencia de Viagens Enterprise </h1>
        </DivH1Header>
        <ButtonHeader onClick={() => goToHomeAdm(history)}> Home </ButtonHeader>
      </Header>
      <div>
        <H2Home>Cadastrar uma nova viagem</H2Home>

        <DivRegister>
          <form onSubmit={handleSubmit}>
            <label>Nome:</label>
            <input
              value={form.name}
              onChange={handleInputChange}
              pattern={"[A-Za-z ]{5,}"}
              name={"name"}
              type="text"
              required
            />
            <br></br>
            <label>Planeta:</label>
            <Planets
              handleInputChange={handleInputChange}
              planet={form.planet}
            />

            <br></br>
            <label>Data da Viagem:</label>
            <input
              value={form.date}
              onChange={handleInputChange}
              name={"date"}
              min={"2021-01-01"}
              type="date"
              required
            />
            <br></br>
            <label>Duração da Viagem:</label>
            <input
              value={form.durationInDays}
              onChange={handleInputChange}
              name={"durationInDays"}
              min={50}
              type="number"
              required
            />
            <br></br>
            <label>Descrição da Viagem:</label>
            <input
              value={form.description}
              onChange={handleInputChange}
              name={"description"}
              type="text"
              pattern={"[A-Za-z ]{30,}"}
              required
            />

            <CreateButton>Criar Viagem</CreateButton>
          </form>
        </DivRegister>
      </div>
    </DivContainer>
  );
}

export default CreateTripsPage;

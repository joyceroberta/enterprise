import React from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  Header,
  ButtonHeader,
  DivH1Header,
  RegisterButton,
  DivContainer,
} from "./styled";
import { useForm } from "../../components/hooks/useForm";
import { Countries } from "../../assets/Countries";
import { userApplication } from "../../constants/application";
import { goToHome, goToListTripsPage } from "../../router/coordinator";

const ApplicationFormPage = () => {
  const { form, onChange } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    onChange(value, name);
  };

  const history = useHistory();

  const id = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    userApplication(form, id.id);
  };

  return (
    <DivContainer>
      <Header>
        <DivH1Header>
          <h1>Agencia de Viagens Enterprise</h1>
        </DivH1Header>

        <ButtonHeader onClick={() => goToHome(history)}>
          {" "}
          Voltar para Home{" "}
        </ButtonHeader>

        <button onClick={() => goToListTripsPage(history)}>
          "Voltar para viagens"
        </button>
      </Header>

      <form onSubmit={handleSubmit}>
        <h3>Formulário de Inscrição</h3>

        <label>Nome:</label>
        <input
          required
          name="name"
          value={form.name}
          type="text"
          pattern="/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{3,}$/g"
          onChange={handleInputChange}
        ></input>

        <label>Idade:</label>
        <input
          required
          name="age"
          value={form.age}
          type="number"
          min="18"
          onChange={handleInputChange}
        ></input>

        <label>Por que você merece viajar com a Labe-X?</label>
        <input
          required
          name="applicationText"
          value={form.applicationText}
          type="text"
          pattern="/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{30,}$/g"
          placeholder="Escreva no mínimo 30 caracteres"
          onChange={handleInputChange}
        ></input>

        <label>Profissão:</label>
        <input
          required
          name="profession"
          value={form.profession}
          type="text"
          placeholder="Escreva no mínimo 10 caracteres"
          pattern="/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{10,}$/g"
          onChange={handleInputChange}
        ></input>

        <label>País:</label>
        <Countries handleInputChange={handleInputChange} country={form.country} />

        <RegisterButton type="submit">Cadastrar</RegisterButton>
      </form>
    </DivContainer>
  );
};

export default ApplicationFormPage;
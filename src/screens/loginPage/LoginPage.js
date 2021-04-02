import { React } from "react";
import { useHistory } from "react-router-dom";
import {
  LoginButton,
  DivContainer,
  H2Home,
  DivLogin,
  Header,
  DivH1Header,
  ButtonHeader,
} from "./styled";
import { useForm } from "../../components/hooks/useForm";
import { login } from "../../constants/login";
import { goToHome, goToHomeAdm } from "../../router/coordinator";
import { useUnprotectedPage } from "../../components/hooks/useUnprotectedPage";

function LoginPage() {
  const history = useHistory();
  useUnprotectedPage();
  const { form, onChange } = useForm({ email: "", password: "" });

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    onChange(value, name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(form, history);
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
      </Header>
      <div>
        <H2Home>Olá administrador, faça o seu login</H2Home>
        <DivLogin>
          <form onSubmit={handleSubmit}>
            <label>E-mail:</label>
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              value={form.email}
              onChange={handleInputChange}
            />
            <label>Senha:</label>
            <input
              type="password"
              name="password"
              value={form.password}
              placeholder="Senha"
              onChange={handleInputChange}
            />

            <LoginButton onClick={login}>Entrar</LoginButton>
          </form>
        </DivLogin>
      </div>
    </DivContainer>
  );
}

export default LoginPage;

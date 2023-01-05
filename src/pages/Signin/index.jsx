import React, { useState, useEffect } from "react";
import Input from "../../components/Input";
import { Button } from "../../import";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signin = () => {
  const { signin, signed } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (signed) {
      navigate("/");
    }
  });

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    signin(email, senha);
  };

  return (
    <C.Container>
      <form onSubmit={handleLogin}>
        <C.Label>CLIVED LOGIN</C.Label>
        <C.Content>
          <Input
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <Input
            type="password"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
          <C.labelError>{error}</C.labelError>
          <Button
            color="success"
            variant="outlined"
            size="medium"
            type="submit">
            Entrar
          </Button>
          <C.LabelSignup>
            Não tem uma conta?
            <C.Strong>
              <Link to="/signup">&nbsp;Registre-se</Link>
            </C.Strong>
          </C.LabelSignup>
        </C.Content>
      </form>
    </C.Container>
  );
};

export default Signin;

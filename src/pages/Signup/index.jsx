import React, { useState } from 'react';
import Input from '../../components/Input';
import { Button } from '../../import';
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = (event) => {
    event.preventDefault();

    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso!");
    navigate("/");
  };

  return (
    <C.Container>
      <form onSubmit={handleSignup}>
        <C.Label>CLIVED REGISTER</C.Label>
        <C.Content>
          <Input
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <Input
            type="email"
            placeholder="Confirme seu E-mail"
            value={emailConf}
            onChange={(e) => [setEmailConf(e.target.value), setError("")]}
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
            type='submit'
          >
            Registrar</Button>
          <C.LabelSignup>
            Já tem uma conta?
            <C.Strong>
              <Link to="/signin">&nbsp;Login</Link>
            </C.Strong>
          </C.LabelSignup>
        </C.Content>
      </form>
    </C.Container>
  );
};

export default Signup;
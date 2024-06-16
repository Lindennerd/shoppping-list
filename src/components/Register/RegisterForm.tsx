import { FormEvent, useState } from "react";
import { RegisterModel, useAuth } from "../../core/auth";
import { Button, Form, Input } from "../Form";

export const RegisterForm = () => {
  const [user, setUser] = useState<RegisterModel>({
    email: "",
    password: "",
    name: "",
    passwordConfirm: "",
  });
  const { register } = useAuth();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await register(user);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nome"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        value={user.name}
      />
      <Input
        type="email"
        placeholder="Email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        value={user.email}
      />
      <Input
        type="password"
        placeholder="Senha"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        value={user.password}
      />
      <Input
        type="password"
        placeholder="Confirmação de Senha"
        onChange={(e) => setUser({ ...user, passwordConfirm: e.target.value })}
        value={user.passwordConfirm}
      />
      <Button type="submit">Registrar</Button>
    </Form>
  );
};

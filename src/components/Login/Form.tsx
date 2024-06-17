import { FormEvent, useState } from "react";
import { Button, Input } from "../../components/Form";
import { useAuth } from "../../core/auth";
import { Login } from "../../core/auth/user";

export const LoginForm = () => {
  const [user, setUser] = useState<Login>({
    email: "",
    password: "",
    name: "",
  });
  const { login } = useAuth();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await login(user);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-1/3 gap-3">
      <Input
        type="text"
        required
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <Input
        type="password"
        required
        placeholder="Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <Button type="submit">
        <span>Login</span>
      </Button>
    </form>
  );
};

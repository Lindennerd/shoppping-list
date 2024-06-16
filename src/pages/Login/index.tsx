import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Login/Form";

export const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      <LoginForm />
      <Link to="/register" className="text-blue-500 mt-4">
        Criar usuário
      </Link>
    </div>
  );
};

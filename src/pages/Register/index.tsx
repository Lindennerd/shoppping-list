import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/Register";

export const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <h1 className="text-4xl font-bold mb-4">Criar Usuário</h1>
      <RegisterForm />
      <Link to="/login" className="text-blue-500 mt-4">
        Login
      </Link>
    </div>
  );
};

import { Link } from "react-router-dom";
import { useAuth, User } from "../../core/auth";

export const Topbar = () => {
  const { auth, isLogged, logout } = useAuth();

  const getTopbar = () => {
    return isLogged && auth ? (
      <LoggedTopBar auth={auth} logout={logout} />
    ) : (
      <Link to="/login">Login</Link>
    );
  };

  return (
    <header className="bg-gray-500 text-white p-4 flex">
      <nav className="flex-1">
        <ul className="flex flex-row-reverse space-x-4 gap-2">{getTopbar()}</ul>
      </nav>
    </header>
  );
};

const LoggedTopBar = (props: { auth: User; logout: () => void }) => {
  return (
    <>
      <a href="" onClick={() => props.logout()}>
        Logout
      </a>
      <li>
        <span> Bem vindo {props.auth.name}</span>
      </li>
    </>
  );
};

import { Link } from "react-router-dom";

export const Topbar = () => {
  return (
    <header className="bg-gray-500 text-white p-4 flex">
      <nav className="flex-1">
        <ul className="flex flex-row-reverse space-x-4">
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

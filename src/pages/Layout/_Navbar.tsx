export const Navbar = () => {
  return (
    <nav className="bg-gray-800 w-1/6 h-screen">
      <ul className="flex flex-col">
        <li className="p-4 text-white">
          <a href="/">Home</a>
        </li>
        <li className="p-4 text-white">
          <a href="/shopping/list/new">Nova Lista</a>
        </li>
        <li className="p-4 text-white">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

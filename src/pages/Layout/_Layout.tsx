import { Outlet } from "react-router-dom";
import { Navbar } from "./_Navbar";
import { Topbar } from "./_Topbar";

export const Layout = () => {
  return (
    <main className="flex">
      <Navbar />
      <article className="w-full">
        <Topbar />
        <Outlet />
      </article>
    </main>
  );
};

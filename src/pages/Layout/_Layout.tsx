import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "./_Navbar";
import { Topbar } from "./_Topbar";

export const Layout = () => {
  return (
    <main className="flex">
      <Navbar />
      <article className="w-full">
        <Topbar />
        <ToastContainer />
        <Outlet />
      </article>
    </main>
  );
};

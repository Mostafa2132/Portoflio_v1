import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      <div className="container mt-14 max-w-[84rem] mx-auto px-4">
        <Outlet>{children}</Outlet>
      </div>
      <Footer />
    </>
  );
}

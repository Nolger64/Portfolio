import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

import ContextPorfolioProvider from "../../Contexts/ContextPortfolioPorvider";
import "./Root.css";

const Root = () => {
  return (
    <>
      <ContextPorfolioProvider>
        <div className="page">
          <Navbar />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </ContextPorfolioProvider>
    </>
  );
};
export default Root;

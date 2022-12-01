import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

import ContextPorfolioProvider from "../../Contexts/ContextPortfolioPorvider";
import "./Root.css";
import Loader from "../Loader/Loader";
import { useState } from "react";

const Root = () => {
  const [loading, setLoading] = useState(false);
  setTimeout(() => {
    setLoading(true)
  }, 1000);
  return (
    <>
      <ContextPorfolioProvider>
        <div className="page">
          <Navbar />
          <main>
            {loading ? (
              <Outlet />
            ):(
              <Loader />
            )}
            | 
          </main>
          <Footer />
        </div>
      </ContextPorfolioProvider>
    </>
  );
};
export default Root;

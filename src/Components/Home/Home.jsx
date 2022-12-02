import "./Home.css";
import Loader from "../Loader/Loader";
import { useState } from "react";
import HomeLoad from "./Homeload";

const Home = () => {
  const [loading, setLoading] = useState(true);
  
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return(
    <>
      {loading ? (<Loader />):(<HomeLoad />)}
    </>
  )

};
export default Home;

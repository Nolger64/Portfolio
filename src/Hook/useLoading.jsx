import { useState } from "react";

const useLoading = (props) => {
  const [load, setLoad] = useState(true);

  setTimeout(() => {
    setLoad();
  }, 500);
  return (load);
};

export default useLoading;

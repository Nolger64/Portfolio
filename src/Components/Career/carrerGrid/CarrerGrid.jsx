import { useState } from "react";
import CarrerCard from "./carrerCard/CarrerCard";

const CarrerGrid = (props) => {
  const [parr, setparr] = useState(
    "If you have a variable to send, and not a string as in the example above, you just put the variable name inside curly brackets:If you have a variable to send, and not a string as in the example above, you just put the variable name inside curly brackets:"
  );
  return (
    <>
      <CarrerCard
        tittle="Estudiando en: "
        parr={parr}
        date={{ start: 2017, end: 2014 }}
      />
      <CarrerCard
        tittle="Estudiando en: "
        parr={parr}
        date={{ start: 2017, end: 2014 }}
      />
      <CarrerCard
        tittle="Estudiando en: "
        parr={parr}
        date={{ start: 2017, end: 2014 }}
      />
      <CarrerCard
        tittle="Estudiando en: "
        parr={parr}
        date={{ start: 2017, end: 2014 }}
      />
    </>
  );
};
export default CarrerGrid;

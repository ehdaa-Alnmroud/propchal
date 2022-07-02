import React from "react";
import { Button } from "react-bootstrap";
import Car from "./Car";
const Cars = (props) => {
  const summ = (price) => {
    {
      props.carrs.map((car, i) => <Car key={i} car={car.price} />);
    }
  };
  return (
    <div>
      <div className="carsDi">
        {/* display arr */}
        {props.carrs.map((car, i) => (
          <Car key={i} car={car} />
        ))}
      </div>
      {/* display the full price */}
      <h5><span>the sum of cars price =</span> {props.carrs.reduce((x, i) => x + i.price, 0)}</h5>
     
    </div>
  );
};

export default Cars;

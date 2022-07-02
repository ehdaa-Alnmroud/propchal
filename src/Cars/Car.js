import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Car = (props) => {
  const Handelinfo = (price, name) => {
    alert(`you have to pay ${price} to buy ${name}`);
    // alert(price, name);
  };
  return (
    <div className="carCard">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.car.imgsrc} />
        <Card.Body>
          <Card.Title>
            <h5>car name :{props.car.name}</h5>
          </Card.Title>
          <Card.Text>
            <h6>price:{props.car.price}$</h6>
          </Card.Text>
          
          {/* get the car info  */}
          <Button
            variant="outline-dark" className="buto"
            onClick={() => Handelinfo(props.car.price, props.car.name)}
          >
            bay
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Car;

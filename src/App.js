import React from "react";
import Mynav from "./Cars/Mynav";
import Cars from "./Cars/Cars";
import Foooter from "./Cars/Foooter";

import "./App.css";
const carrs = [
  {
    name: "bmw",
    price: 150,
    imgsrc: "./img/p1.jpg",
  },
  {
    name: "Mercedes",
    price: 8600,
    imgsrc: "./img/p2.jpg",
  },
  {
    name: "hunda",
    price: 12000,
    imgsrc: "./img/p3.jpg",
  },
];

function App() {
  return (
    <div className="App">
      <Mynav />
      <Cars carrs={carrs} />
      <Foooter/>
    </div>
  );
}

export default App;

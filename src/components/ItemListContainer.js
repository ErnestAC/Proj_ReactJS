import React from "react";
import "bulma/css/bulma.css";
import "../css/Navbar.css";


import ItemCard from "./Item";

const listOfObjects = [
  {
    Title: "ARCo",
    Handle: "V12 Diesel-Electric",
    ImageURL: require("../img/arco.png"),
    Description: "Cargo diesel-electric locomotive. 7.5 wide. Modular engine and cabs. Fully L-gauge compatible. 9V only.",
    Stock: 3,
    Initial: 0,
  },
  {
    Title: "Siemens",
    Handle: "Electric @ 15kV",
    ImageURL: require("../img/siemens.png"),
    Description: "High-speed electric locomotive. Dual 9V motor compatible. 8+ wide. Monolythic cars with detailed engine rooms and cabs.",
    Stock: 2,
    Initial: 0,
  },
  {
    Title: "Alstom",
    Handle: "I16 Diesel-Electric",
    ImageURL: require("../img/alstom.png"),
    Description: "French style diesel-electric locomotive. Modular cabs and engines. 7.5 studs wide. PF/PU compatible.",
    Stock: 10,
    Initial: 0,
  },
  {
    Title: "JRF",
    Handle: "Electric @17kV/I12 Diesel-Electric",
    ImageURL: require("../img/jrf_all_dualend.png"),
    Description: "Dual duty electric/diesel-electric locomotive. Modular cab and engine. 7.5 studs wide. PF and 9V compatible.",
    Stock: 6,
    Initial: 0,
  },
  {
    Title: "Royal Electric",
    Handle: "Electric @ 22kV",
    ImageURL: require("../img/shunt2.png"),
    Description: "Shunt duty locomotive. First 'dual-pole' DC electric. 7 studs wide. Not motorizable, display only.",
    Stock: 5,
    Initial: 0,
  },
];



const ItemListContainer = ({ greetingMessage }) => {
  return (
    <div className="container">
        <div className="section">
          <div className="notification">{greetingMessage}</div>
            <div className="columns is-multiline">
            {listOfObjects.map((item) => (
                <ItemCard
                  key={1}
                  titulo={item.Title}
                  handle={item.Handle}
                  imagen={item.ImageURL}
                  description={item.Description}
                  stock={item.Stock}
                  initial={item.Initial}
                />
            ))}
          </div>
        </div>
      </div>
  );
};

console.log(listOfObjects);

export default ItemListContainer;

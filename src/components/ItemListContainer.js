import React from "react";
import "bulma/css/bulma.css";
import "../css/Navbar.css";

import ARCoImg from "../img/arco.png";
import AlstomImg from "../img/alstom.png";
import SiemensImg from "../img/siemens.png";

import ItemCard from "./ItemCard";

const listOfObjects = [{
  titulo:"ARCo",
  handle:"V12 Diesel-Electric",
  imagen:"../img/arco.png",
  description:"Cargo diesel-electric locomotive. 7.5 wide. Modular engine and cabs. Fully L-gauge compatible. 9V only.",
  stock:3,
  initial:0
},
{
  titulo:"Siemens",
  handle:"Electric @ 15kV",
  imagen:"../img/siemens.png",
  description:"High-speed electric locomotive. Dual 9V motor compatible. 7.5 wide. Modular engines and cab.",
  stock:67,
  initial:0
},
{
  titulo:"Alstom",
  handle:"I16 Diesel-Electric",
  imagen:"../img/alstom.png",
  description:"French style diesel-electric locomotive. Modular cabs and engines. 7.5 studs wide. PF and 9V compatible.",
  stock:10,
  initial:0
}]



const ItemListContainer = ({ greetingMessage }) => {
  return (
    <div className="container">
      <section className="section">
        <div className="notification">{greetingMessage}</div>
        
        <div className="columns">
          <div className="column is-4">
            <ItemCard
              titulo="ARCo"
              handle="V12 Diesel-Electric"
              imagen={ARCoImg}
              description="Cargo diesel-electric locomotive. 7.5 wide. Modular engine and cabs. Fully L-gauge compatible. 9V only."
              stock={3}
              initial={0}
            />
          </div>
          <div className="column is-4">
            <ItemCard
              titulo="Siemens"
              handle="Electric @ 15kV"
              imagen={SiemensImg}
              description="High-speed electric locomotive. Dual PF/PU or dual 9V compatible. 7.5 wide. Modular engines and cab."
              stock={67}
              initial={0}
            />
          </div>
          <div className="column is-4">
            <ItemCard
              titulo="Alstom"
              handle="I16 Diesel-Electric"
              imagen={AlstomImg}
              description="French style diesel-electric locomotive. Modular cabs and engines. 7.5 studs wide. PF/PU and 9V compatible."
              stock={10}
              initial={0}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

console.log(listOfObjects);

export default ItemListContainer;

import React from "react";
import "bulma/css/bulma.css";
import "../css/Navbar.css";

import ARCoImg from "../img/arco.png";
import AlstomImg from "../img/alstom.png";
import SiemensImg from "../img/siemens.png";

import ProfileCard from "./ItemCard";

const ItemListContainer = ({ greetingMessage }) => {
  return (
    <div className="container">
      <section className="section">
        <div class="notification" >{greetingMessage}</div>
        <div className="columns">
          <div className="column is-4">
            <ProfileCard
              titulo="ARCo"
              handle="V12 Diesel-Electric"
              imagen={ARCoImg}
              stock={3}
              initial={1}
            />
          </div>
          <div className="column is-4">
            <ProfileCard
              titulo="Siemens"
              handle="Electric @ 15kV"
              imagen={SiemensImg}
              stock={0}
              initial={0}
            />
          </div>
          <div className="column is-4">
            <ProfileCard
              titulo="Alstom"
              handle="I16 Diesel-Electric"
              imagen={AlstomImg}
              stock={10}
              initial={1}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItemListContainer;

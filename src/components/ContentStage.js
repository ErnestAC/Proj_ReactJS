import React from "react";
import "bulma/css/bulma.css";
import "../css/Navbar.css";

import ARCoImg from "../img/arco.png";
import AlstomImg from "../img/alstom.png";
import SiemensImg from "../img/siemens.png";

import ProfileCard from "../components/ProfileCard";

const ContentStage = () => {
    return (
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                titulo="ARCo"
                handle="V12 Diesel-Electric"
                imagen={ARCoImg}
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                titulo="Siemens"
                handle="Electric @ 15kV"
                imagen={SiemensImg}
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                titulo="Alstom"
                handle="I16 Diesel-Electric"
                imagen={AlstomImg}
              />
            </div>
          </div>
        </section>
      </div>
    );
};

export default ContentStage;

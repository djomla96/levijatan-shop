import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

import "../css/collapse.css";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className="accordion__section">
        <div className="collapse-img"><img alt={props.dog.id} src={props.dog.img}></img></div>
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.title}</p>
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div className="accordion__text">
            <p>Rasa: {props.dog.rasa}</p>
            <p>Starost: {props.dog.starost}</p>
            <p>Napomena: {props.dog.napomena}</p>
            <p>Pol: {props.dog.pol}</p>
            <p>Lokacija: {props.dog.lokacija}</p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
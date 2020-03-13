import React from "react";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";
import Content from "./Content";
const Coll = () => (
  <div style={{textAlign: "center"}}>
    <div id="collapsible-cont"
      style={{
        width: "100%",
        margin: "auto",
        
        backgroundColor: "#edf2fa",
        marginTop: 20
      }}
    >
      <button
        className="btn btn-light"
        id="toggler"
        style={{
          marginBottom: "1rem",
          marginLeft: 10,
          marginTop: 20,
          border: "thin solid black",
          fontFamily: "Poppins",
          backgroundColor:"#cfd2e0"
        }}
      >
        <h3 style={{fontFamily:'Poppins'}} >
          <b>Resume</b>
        </h3>
      </button>
    </div>
    <UncontrolledCollapse toggler="#toggler">
      <Content />
    </UncontrolledCollapse>
  </div>
);

export default Coll;

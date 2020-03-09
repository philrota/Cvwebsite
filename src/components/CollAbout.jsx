import React from "react";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";

const CollAbout = () => (
  <div >
    <div id="collapsible-cont"
      style={{
        width: "100%",
        margin: "auto",
        textAlign: "left",
        backgroundColor: "#edf2fa",
        marginTop: 20
      }}
    >
      <button
        className="btn btn-light"
        id="toggler-about"
        style={{
          marginBottom: "1rem",
          marginLeft: 10,
          marginTop: 20,
          border: "thin solid black",
          fontFamily: "Poppins"
        }}
      >
        <h3>
          <b>About me</b>
        </h3>
      </button>
    </div>
    <UncontrolledCollapse toggler="#toggler-about">
      <div className="card" style={{fontFamily:'Poppins'}}>
          
          <div className="card-body">
              <div className="card-title">Just a few words...</div>
              <div className="card-text">My name is Philippe I am 24 years old and I came from Bergamo in Italy.
               I'm studyng,web and software,frontend developing to learn and face new jobs and realize myself.
               I'm interested in web/software job proposals,i am a precise,dynamic and motivated person,finalized to reach target goals.
               In my actual job career i worked in contact with costumers and also had a great bound with my collegues,that led me to improve my interpersonal skills.
               I really love programming because it helps me also think about how to behave with any problems in the real life, because
              making the right and best decision in a short time it's all that matters! </div>
          </div>
      </div>
    </UncontrolledCollapse>
  </div>
);

export default CollAbout;

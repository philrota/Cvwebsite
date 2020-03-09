import React from "react";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";

const CollAbout = () => (
  <div>
    <div
      id="collapsible-cont"
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
        id="toggler-skills"
        style={{
          marginBottom: "1rem",
          marginLeft: 10,
          marginTop: 20,
          border: "thin solid black",
          fontFamily: "Poppins"
        }}
      >
        <h3>
          <b>My skills</b>
        </h3>
      </button>
    </div>
    <UncontrolledCollapse toggler="#toggler-skills">
      <div className="card" style={{ fontFamily: "Poppins" }}>
        <div className="card-body">
          

          <div className="card-title">Hard skills</div>
          <div className="card-text">
            <h6><b>It</b></h6>
            <ul>
              <li>Working with Microsoft Windows.</li>
              <li>Mail and Microsoft Office.</li>
              <li>Configuring devices such as printers,mouses etc..</li>
              <li>Visual Studio.</li>
              <li>SAP ERP.</li>
            </ul>
            <h6><b>Programming</b></h6>
            <ul>
              <li>Front-end (Html,Css,Js,React.js,Bootstrap and JQuery).</li>
              <li>Database Sql.</li>
              <li>Back-end principles of Node.js and Express.</li>
            </ul>
            <h6><b>Logistics</b></h6>
            <ul>
                <li>Customs terms and regolamentation</li>
                <li>Warehousing</li>
                <li>Stock keep</li>
                <li>Front and back office</li>
            </ul>
            <h6><b>Relationals</b></h6>
            <ul>
              <li>Deal with costumers.</li>
              <li>Keep a great relation with collegues.</li>
            </ul>
          </div>

          <div id="card-two" className="card-body">
            <div className="card-title">Soft skills</div>
            <div className="card-text">
                <ul>
                    <li>Goals oriented method.</li>
                    <li>Accuracy and attention.</li>
                    <li>Time management</li>
                    <li>Team working optic.</li>
                    <li>Work independently.</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </UncontrolledCollapse>
  </div>
);

export default CollAbout;

import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import linkedin from "../images/linkedin.png";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer class="conatiner-fluid ">
        <Card id="footer">
          <Card.Header id="footer-header">Contacts</Card.Header>
          <Card.Body>
            <div className="container">
              <div className="row">
                <div className="col">
                  <ul className="footer-list">
                    <li>
                      <b>Philippe Rota</b>
                      <a
                        id="social"
                        rel="noopener noreferrer "
                        target="_blank"
                        href="https://www.linkedin.com/in/philippe-rota-02541916b/"
                      >
                        <img src={linkedin} alt="linkedin" />{" "}
                      </a>
                    </li>
                    <li>Italy,Lombardy,Bergamo</li>
                    <li>zipcode: 24060</li>
                  </ul>
                </div>
                <div className="col order-1">
                  <ul className="footer-list">
                    <li>
                      <b>E-mail</b>: philippe.rota@outlook.it
                    </li>
                    <li>
                      <b>Phone</b>: (+39) 3473678773
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </footer>
    );
  }
}

export default Footer;

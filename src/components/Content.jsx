import React, { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main id="main-box" className="container-fluid ">
        <div className="card">
          <h5 className="card-header">Work Summary</h5>
          <div className="card-body">
            <h5 className="card-title">DHL Express Italy</h5>
            <p className="card-text">
              Now,from 2016, i am working for Dhl as a <i>warehouse employee</i>{" "}
              in the Bergamo gateway (BGY-BYD).
              <br />I do several jobs including:
              <ul>
                <li>Receiving,loading and unloading trucks</li>
                <li>
                  Clear goods documentation for the customs,for import/export
                </li>
                <li>
                  Radio checking arrivals to the facility,also checking goods to
                  be shipped
                </li>
                <li>
                  Handle secured goods,and dangerous goods such inflammable and
                  corrosives substances
                </li>
                <li>
                  Stock goods,with forklift,that are not ready to be shipped
                </li>
                <li>Attach custom notes on "on-delivery" parcels</li>
              </ul>
            </p>
          </div>
          <div id="card-two" class="card-body">
            <h5 className="card-title">DHL Aviation</h5>
            <p className="card-text">
              I have also worked for Dhl as a <i>Operation and Ramp agent</i> in
              the airport HUB stanced in Bergamo, Orio al Serio.
              <br />I did several tasks:
              <ul>
                <li>Get containers (ULD) be ready to be shipped via air.</li>
                <li>
                  Write and check the load verification form,while and just
                  after the aircraft has been loaded
                </li>
                <li>
                  Check if each aircraft hooks are up and holding tight the
                  containers
                </li>
                <li>Operating in a strictly safety ruled enviroment</li>
              </ul>
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default Content;

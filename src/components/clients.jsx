import React, { Component } from "react";

class Client extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="site-section bg-light">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-12">
                <div className="section-heading text-center">
                  <h2>
                    Client <strong>Testimonial</strong>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              {/* <div className="col-md-6"> */}
              <h3>Become our first client</h3>
              {/* </div> */}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Client;

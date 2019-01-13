import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="site-section bg-light" id="section-contact">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-5">
                <div className="section-heading text-center">
                  <h2>
                    Wanna <strong>Start Work</strong> With Me?
                  </h2>
                </div>
              </div>

              <div className="col-md-7 mb-5 mb-md-0">
                <form action="" className="site-form">
                  <h3 className="mb-5">Get In Touch</h3>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control px-3 py-4"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control px-3 py-4"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control px-3 py-4"
                      placeholder="Your Phone"
                    />
                  </div>
                  <div className="form-group mb-5">
                    <textarea
                      className="form-control px-3 py-4"
                      cols="30"
                      rows="10"
                      placeholder="Write a Message"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn btn-primary  px-4 py-3"
                      value="Send Message"
                    />
                  </div>
                </form>
              </div>
              <div className="col-md-5 pl-md-5">
                <h3 className="mb-5">My Contact Details</h3>
                <ul className="site-contact-details">
                  <li>
                    <span className="text-uppercase">Email</span>
                    site@gmail.com
                  </li>
                  <li>
                    <span className="text-uppercase">Phone</span>
                    +30 976 1382 9921
                  </li>
                  <li>
                    <span className="text-uppercase">Fax</span>
                    +30 976 1382 9922
                  </li>
                  <li>
                    <span className="text-uppercase">Address</span>
                    San Francisco, CA <br />
                    4th Floor8 Lower <br />
                    San Francisco street, M1 50F
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Contact;

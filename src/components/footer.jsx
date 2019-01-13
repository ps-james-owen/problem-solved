import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="site-footer">
          <div className="container">
            <div className="row mb-3">
              <div className="col-md-12 text-center">
                <p>
                  <a href="#site-footer" className="social-item">
                    <span className="icon-facebook2" />
                  </a>
                  <a href="#site-footer" className="social-item">
                    <span className="icon-twitter" />
                  </a>
                  <a href="#site-footer" className="social-item">
                    <span className="icon-instagram2" />
                  </a>
                  <a href="#site-footer" className="social-item">
                    <span className="icon-linkedin2" />
                  </a>
                  <a href="#site-footer" className="social-item">
                    <span className="icon-vimeo" />
                  </a>
                </p>
              </div>
            </div>
            <div className="row">
              <p className="col-12 text-center">
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            Copyright &copy; <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" className="text-primary">Colorlib</a>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              </p>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;

import React, {Component} from "react";

var Recaptcha = require('react-recaptcha');

class Contact extends Component {

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount = () => {
        console.log("Component has now mounted")
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('https://owyau6idz5.execute-api.eu-west-2.amazonaws.com/v1/emails', {
            method: 'POST',
            body: {
                name : data.get("name"),
                email : data.get("email"),
                number : data.get("number"),
                message : data.get("message"),
                recaptcha : "df"
            }
        });
    };

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
                                <form onSubmit={this.handleSubmit} className="site-form">
                                    <h3 className="mb-5">Get In Touch</h3>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="form-control px-3 py-4"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-control px-3 py-4"
                                            placeholder="Your Email"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="number"
                                            id="number"
                                            name="number"
                                            className="form-control px-3 py-4"
                                            placeholder="Your Phone"
                                        />
                                    </div>
                                    <div className="form-group mb-5">
                    <textarea
                        id="message"
                        name="message"
                        className="form-control px-3 py-4"
                        cols="30"
                        rows="10"
                        placeholder="Write a Message"
                    />
                                    </div>

                                    <div className="form-group mb-5">
                                        <Recaptcha
                                            sitekey="6LcBzaEUAAAAAEiYccevAYCLAcci9IpVrPSatfAX"
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
                                        San Francisco, CA <br/>
                                        4th Floor8 Lower <br/>
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

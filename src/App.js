import PropTypes from "prop-types";
import React, {Component} from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Contract from "./components/contract";
import Blog from "./components/blog";
import BlogPage from "./components/blog-page";
import {Route} from "react-router-dom";


class App extends Component {
    state = {};

    static propTypes = {
        childPage: PropTypes.string
    }

    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <Route exact path="/" component={Contract}/>
                <Route exact path="/blog" component={Blog}/>
                <Route path="/blog/:id" component={this.childPage}/>
                <Footer/>
            </React.Fragment>
        );
    }

    childPage({match}) {
        return <BlogPage id={match.params.id}/>;
    }
}

export default App;

import React, { Component } from "react";
import * as actions from "../action";
import { connect } from "react-redux";
import Header from "./Header";
import MyList from "./MyList";
import Recommendation from "./Recommendation";
import Footer from "./Footer";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(actions.getAllData());
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <MyList />
        <Recommendation />
        <Footer />
      </React.Fragment>
    );
  }
}

export default connect()(App);

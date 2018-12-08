import React, { Component } from "react";
import { lists } from "../mockData";
import { connect } from "react-redux";
import MyList from "./MyList";
import Recommendation from "./Recommendation";
import MyListTitle from "./MyListTitle";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_MOCK_DATA", lists });
  }
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>Netfilx</h1>
        </header>
        <MyList />
        <Recommendation />
        <MyListTitle />
      </React.Fragment>
    );
  }
}

export default connect()(App);

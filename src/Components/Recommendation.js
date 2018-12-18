import React from "react";
import List from "./ListTemplate";
import { connect } from "react-redux";
const Recommendation = props => {
  const onClick = item => {
    props.dispatch({ type: "ADD_TO_MYLIST", item });
  };
  const { list } = props;

  return (
    <List
      listTitle="Recommendation"
      onClick={onClick}
      list={list}
      btnContent="Add"
    />
  );
};
const mapStatetoProps = state => {
  return { list: state.recommendations };
};

export default connect(mapStatetoProps)(Recommendation);

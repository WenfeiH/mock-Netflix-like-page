import React from "react";
import List from "./ListTemplate";
import { connect } from "react-redux";
const MyList = props => {
  const onClick = item => {
    props.dispatch({ type: "REMOVE_FROM_LIST", item });
  };
  const { list } = props;
  return (
    <List
      listTitle="My List"
      onClick={onClick}
      list={list}
      btnContent="Remove"
    />
  );
};
const mapStatetoProps = state => {
  return { list: state.mylist };
};

export default connect(mapStatetoProps)(MyList);

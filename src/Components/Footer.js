import React from "react";
import { connect } from "react-redux";
const Footer = props => {
  const { myList } = props;
  return (
    <div>
      <h3>Titles in MyList</h3>
      <ul>
        {myList.length === 0 ? (
          <p>None</p>
        ) : (
          myList.map(item => <li key={item.id}>{item.title}</li>)
        )}
      </ul>
    </div>
  );
};
const mapStatetoProps = state => {
  return { myList: state.mylist };
};

export default connect(mapStatetoProps)(Footer);

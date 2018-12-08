import Film from "./Film";
import React from "react";
import { connect } from "react-redux";
const MyList = props => {
  const onClick = item => {
    props.dispatch({ type: "REMOVE_FROM_LIST", item });
  };
  const { myList } = props;
  return (
    <div>
      <h3>MyList</h3>
      <div className="flex-container">
        {myList.length === 0 ? (
          <p>None</p>
        ) : (
          myList.map(item => (
            <Film
              {...item}
              button="Remove"
              onClick={() => onClick(item)}
              key={item.id}
            />
          ))
        )}
      </div>
    </div>
  );
};
const mapStatetoProps = state => {
  return { myList: state.mylist };
};

export default connect(mapStatetoProps)(MyList);

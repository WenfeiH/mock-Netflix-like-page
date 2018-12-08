import Film from "./Film";
import React from "react";
import { connect } from "react-redux";
const Recommendation = props => {
  const onClick = item => {
    props.dispatch({ type: "ADD_TO_MYLIST", item });
  };
  const { recommendations } = props;

  return (
    <div>
      <h3>Recommendations</h3>
      <div className="flex-container">
        {recommendations.length === 0 ? (
          <p>None</p>
        ) : (
          recommendations.map(item => (
            <Film
              {...item}
              button="Add"
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
  return { recommendations: state.recommendations };
};

export default connect(mapStatetoProps)(Recommendation);

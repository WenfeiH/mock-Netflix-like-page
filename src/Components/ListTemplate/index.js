import React from "react";
import Film from "./Film";

const List = props => {
  const { listTitle, list, onClick, btnContent } = props;
  return (
    <div>
      <h3>{listTitle}</h3>
      <div className="flex-container">
        {list.length === 0 ? (
          <p>None</p>
        ) : (
          list.map(item => (
            <Film
              {...item}
              button={btnContent}
              onClick={() => onClick(item)}
              key={item.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default List;

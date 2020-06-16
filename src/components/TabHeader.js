import React from "react";

function TabHeader(props) {
  const doClick = (index) => {
    props.click(index);
  };

  let activeClass = props.activeId;

  const handleNav = (direction) => {
    if (direction === "left") {
      props.headerDiv ? (props.headerDiv.current.scrollLeft -= 200) : null;
    } else {
      props.headerDiv ? (props.headerDiv.current.scrollLeft += 200) : null;
    }
  };

  let tabs = props.data.map((item, index) => {
    return (
      <a key={index} className={activeClass === index ? "active" : ""}>
        <span onClick={() => doClick(index)}>
          <span>{item.name}</span>
        </span>
      </a>
    );
  });

  return (
    <div className="header-container">
      <div>
        <button onClick={() => handleNav("left")}>prev</button>
      </div>
      <div ref={props.headerDiv} className="tabs-header">
        {tabs}
      </div>
      <div>
        <button onClick={() => handleNav("right")}>next</button>
      </div>
    </div>
  );
}
export default TabHeader;

import React from 'react';

function TabHeader(props) {

  const doClick = (index) => {
    props.click(index);
  }
  
  let activeClass = props.activeId;

  let tabs = props.data.map((item, index) => {
    return (<a key={index} className={(activeClass === index ? 'active' : '')}>
      <span onClick={() => doClick(index)} ><span>{item.name}</span></span>
    </a>)
  });

  return (
    <div className="tabs-header">{tabs}</div>
  )
}
export default TabHeader;
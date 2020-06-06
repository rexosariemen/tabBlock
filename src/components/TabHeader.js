import React from 'react';

class TabHeader extends React.Component {
  doClick(index, event) {
    this.props.click(index);
  }

  render() {
    let activeClass = this.props.activeId;

    let tabs = this.props.data.map((item, index) => {
      return (<a key={index} className={(activeClass === index ? 'active' : '')}>
        <span onClick={this.doClick.bind(this, index)} ><span>{item.name}</span></span>
      </a>)
    });

    return (
      <div className="tabs-header">{tabs}</div>
    )
  }
}

export default TabHeader;

/*
back: &#8963;
front: &#8250;
*/
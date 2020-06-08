import React from "react";
import TabHeader from "./TabHeader";
import TabContent from "./TabContents";
import { DATA } from "../assets/tabsData.json";

class Tabs extends React.Component {
  constructor() {
    super();

    this.state = {
      activeTab: 0,
      data: DATA,
      modalView: false,
    };
  }

  changeTabOnClick = (index) => {
    this.setState({
      activeTab: index,
    });
  };

  handleClick = () => {
    this.setState({
      modalView: !this.state.modalView,
    });
  };

  render() {
    return (
      <div className="tabs-body">
        <div className="scrollmenu">
          <TabHeader
            data={this.state.data}
            click={this.changeTabOnClick}
            activeId={this.state.activeTab}
          />
        </div>
        <TabContent
          data={this.state.data}
          activeId={this.state.activeTab}
          handleClick={this.handleClick}
          modalView={this.state.modalView}
        />
      </div>
    );
  }
}
export default Tabs;

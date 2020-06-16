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
    this.headerDiv = React.createRef();
  }

  // using fetch
  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/JWA111/a2545d6c7337461828b7fcbfc2fec76d/raw/381d0a5721fc7cabf86194e3d5b02ba4a089fa8d/mockServer.js"
    )
      .then((response) => response.json())
      .then((data) => {
        const neededData = data.course.content[0].ids;
        const result = [];
        data.tabs.forEach((item) => {
          if (neededData.includes(item.id)) {
            result.push(item);
          }
        });
        console.log(result);
        this.setState({
          // data: result, /* uncomment line to update state with fetched data */
        });
      });
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
            headerDiv={this.headerDiv}
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

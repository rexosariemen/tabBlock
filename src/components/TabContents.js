import React from "react";
import { ImageComponent, ImageModal, VideoComponent } from "./MediaComponent";

function TabContent(props) {
  let activeClass = props.activeId;
  const handleClick = props.handleClick;
  const modalView = props.modalView;

  const content = props.data.map((item, index) => {
    let textMarkup = [];
    item.text.forEach((paragraph, i) => {
      textMarkup.push(<p key={i}>{paragraph}</p>);
    });
    if (item.image) {
      return (
        <div key={index}>
          {modalView ? (
            <div>
              <ImageModal onClick={handleClick} item={item} />
            </div>
          ) : (
            <div
              className={
                "tabs-textItem " + (activeClass === index ? "show" : "")
              }
            >
              <div>{textMarkup}</div>
              <ImageComponent onClick={handleClick} item={item} />
            </div>
          )}
        </div>
      );
    } else if (item.video) {
      return (
        <div
          key={index}
          className={"tabs-textItem " + (activeClass === index ? "show" : "")}
        >
          <div>{textMarkup}</div>
          <VideoComponent item={item} />
        </div>
      );
    }
    return (
      <div
        key={index}
        className={"tabs-textItem " + (activeClass === index ? "show" : "")}
      >
        <>{textMarkup}</>
      </div>
    );
  });

  return <div className="tabs-content">{content}</div>;
}
export default TabContent;

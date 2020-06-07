import React from "react";
import { ImageComponent, ImageModal, VideoComponent } from "./MediaComponent";

function TabContent(props) {
  let activeClass = props.activeId;
  const handleClick = props.handleClick;
  const modalView = props.modalView;

  const content = props.data.map((item, index) => {
    let textMarkup = "";
    item.text.forEach((paragraph) => {
      textMarkup += `<p>${paragraph}</p>`;
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
              <div dangerouslySetInnerHTML={{ __html: textMarkup }} />
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
          <div dangerouslySetInnerHTML={{ __html: textMarkup }}></div>
          <VideoComponent item={item} />
        </div>
      );
    }
    return (
      <div
        key={index}
        className={"tabs-textItem " + (activeClass === index ? "show" : "")}
      >
        <p dangerouslySetInnerHTML={{ __html: textMarkup }}></p>
      </div>
    );
  });

  return <div className="tabs-content">{content}</div>;
}
export default TabContent;

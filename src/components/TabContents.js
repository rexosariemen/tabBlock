import React from 'react';
import { ImageComponent, ImageModal, VideoComponent } from './MediaComponent';

function TabContent(props) {

  let activeClass = props.activeId;
  const handleClick = props.handleClick;
  const modalView = props.modalView;

  const content = props.data.map((item, index) => {
    if (item.image) {
      return (<div key={index}>
        {modalView ? (<div>
          <ImageModal
            onClick={handleClick}
            item={item} /></div>) :
          (<div className={'tabs-textItem ' + (activeClass === index ? 'show' : '')} ><p>{item.text} <br /></p>
            <ImageComponent onClick={handleClick} item={item} /></div>)}
      </div>)
    } else if (item.video) {
      return (<div key={index} className={'tabs-textItem ' + (activeClass === index ? 'show' : '')} >
        <p>{item.text}</p><VideoComponent item={item} /></div>
      )}
    return <div key={index} className={'tabs-textItem ' + (activeClass === index ? 'show' : '')} ><p>{item.text}</p></div>
  });

  return (
    <div className="tabs-content">{content}</div>
  );
}
export default TabContent;
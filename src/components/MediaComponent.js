import React from 'react';

export function ImageComponent({ item, onClick }) {
  // const {item, onClick} = props;
  return (
    <img
      onClick={onClick}
      id="img-item"
      src={item.image}
      alt={item.name} />
  )
}


export function ImageModal({ item, onClick }) {
  // const { item, onClick } = props;
  return (
    <div onClick={onClick} id="myModal" className="modal">
      {/* <h1>Hello modal</h1> */}
      {/* <span className="close">&times;</span> */}
      <img src={item.image} alt={item.name} className="modal-content" />
      {/* <h4>Below image</h4> */}
    </div>
  )
}

export function VideoComponent({ item }) {
  return (
    <>
    <video width="320" height="240" controls>
      <source src={item.video} type="video/mp4"></source>
      Your browser does not support the video tag.
    </video>
    </>
  )
}
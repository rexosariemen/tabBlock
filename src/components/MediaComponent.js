import React from "react";

//Create image, imagemodal and video components
export function ImageComponent({ item, onClick }) {
  return (
    <img onClick={onClick} id="img-item" src={item.image} alt={item.name} />
  );
}

export function ImageModal({ item, onClick }) {
  return (
    <div onClick={onClick} id="myModal" className="modal">
      <img src={item.image} alt={item.name} className="modal-content" />
    </div>
  );
}

export function VideoComponent({ item }) {
  return (
    <>
      <video width="310" height="240" controls>
        <source src={item.video} type="video/mp4"></source>
        Your browser does not support this video tag.
      </video>
    </>
  );
}

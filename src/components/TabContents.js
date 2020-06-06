import React from 'react';
// import ImageModal from './ModalImage';
import { ImageComponent, ImageModal, VideoComponent } from './MediaComponent';


class TabContent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      // modalView: false,
    }
  }

  // handleClick = () => {
  //   this.setState({
  //     modalView: !this.state.modalView,
  //   })
  // }

  render() {
    let activeClass = this.props.activeId;
    // let imageModal = this.props.imageModal;
    // console.log(imageModal)
    const handleClick = this.props.handleClick;
    let modalView = this.props.modalView;
    let view;
    // modalView ? <ImageModal onClick={this.handleClick} /> :
    // <ImageComponent onClick={this.handleClick} />;

    let content = this.props.data.map((item, index) => {
      if (item.image) {
        // return (
        // <div key={index}>
        {/* <div className={'tabs-textItem ' + (activeClass === index ? 'show' : '')} ><p>{item.text}</p></div> */ }
        {/* <span style={modalStyles} id="myModal" className="modal">
                <img src={item.image} className="modal-content" id="img01" />
              </span> */}
        {/* <img onClick={() => this.renderModal(item.image)} id="img-item" src={item.image} alt={item.name}/> */ }
        // </div>
        // <div className={'tabs-textItem ' + (activeClass === index ? 'show' : '')} >
        return (<div key={index}>
          {modalView ? (<div>
            <ImageModal
              onClick={handleClick}
              item={item} /></div>) :
            (<div className={'tabs-textItem ' + (activeClass === index ? 'show' : '')} ><p>{item.text} <br /></p>
              <ImageComponent onClick={handleClick} item={item} /></div>)}
        </div>)
        // )
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



}

export default TabContent;
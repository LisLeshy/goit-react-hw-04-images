import PropTypes from 'prop-types';
import { useState } from 'react';
import { Item, Image} from './ImageGallery.styled';
import { Modal } from 'components/Modal/Modal.jsx';




export  function ImageGalleryItem({ webformatURL, alt, largeImageURL }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <Item>
      <Image src={webformatURL} alt="" onClick={toggleModal} />
      {showModal && (
        <Modal alt={alt} modalImg={largeImageURL} closeModal={toggleModal} />
      )}
    </Item>
  );
}

ImageGalleryItem.prototype = {
  alt: PropTypes.string,
  webformatURL: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,

};





// import React, { Component } from 'react';
// import { Item, Image} from './ImageGallery.styled';
// import { Modal } from 'components/Modal/Modal.jsx';

// export class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//   };
//   toggleModal = () => {
//     this.setState(prev => ({ showModal: !prev.showModal }));
//   };
//   render() {
//     return (
//       <Item>
//         <Image
//           src={this.props.webformatURL}
//           alt={this.props.tags}
//           onClick={this.toggleModal}
//         />
//         {this.state.showModal && (
//           <Modal
//             alt={this.props.alt}
//             modalImg={this.props.largeImageURL}
//             closeModal={this.toggleModal}
//           />
//         )}
//       </Item>
//     );
//   }
// }
import PropTypes from 'prop-types';

// import React, { Component } from 'react';
import  { Item, Image } from './ImageGalleryItem.styled.jsx'
import { Modal } from 'components/Modal/Modal.jsx';
import { useState } from 'react';

export function ImageGalleryItem({webformatURL, tags, alt, largeImageURL}) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prev =>({showModal: !prev.showModal}))
  }

      return (
      <Item>
        <Image
          src={webformatURL}
          alt={tags}
          onClick={toggleModal}
        />
        {showModal && (
          <Modal
            alt={alt}
            modalImg={largeImageURL}
            closeModal={toggleModal}
          />
        )}
      </Item>
    );
  }
ImageGalleryItem.prototype = {
  alt: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  tags: PropTypes.func.isRequired,
};

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
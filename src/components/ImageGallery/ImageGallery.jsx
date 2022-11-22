import { ImageGalleryItem } from './ImageGalleryItem';
import PropTypes from 'prop-types';
import {List} from './ImageGallery.styled'


export const ImageGallery = ({ items }) => {
  return (
    <List>
      {items.map(({ id, tags, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            alt={tags}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          ></ImageGalleryItem>
        );
      })}
    </List>
  );
};
ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
// export const ImageGallery = ({images, openModal }) => { return (

//         <ul className={css.imageGallery}>
//       {images.map(({ id, description, smallImage, largeImage }) => (
//         <ImageGalleryItem
//           key={id}
//           description={description}
//           smallImage={smallImage}
//           largeImage={largeImage}
//           openModal={openModal}
//         />
//       ))}
//     </ul>

// ); }; ImageGallery.propTypes = { items:
// PropTypes.arrayOf(PropTypes.object).isRequired, };

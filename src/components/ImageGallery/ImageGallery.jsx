import { ImageGalleryItem } from './ImageGalleryItem';
import PropTypes from 'prop-types';
import {List} from './ImageGalleryItem.styled'


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
import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onSelect }) => (
  <li
    className={s.ImageGalleryItem}
    onClick={() => onSelect(image.largeImageURL)}
  >
    <img
      src={image.webformatURL}
      alt=""
      className={s.ImageGalleryItemImage}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

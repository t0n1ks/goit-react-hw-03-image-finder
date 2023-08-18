import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module/ImageGallery.module.css';

const ImageGallery = ({ images, onSelect }) => (
  <ul className={s.ImageGallery}>
    {images.map(image => (
      <ImageGalleryItem
        key={image.id}
        image={image}
        onSelect={onSelect}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ImageGallery;

import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ images, ...otherProps }) => {
  return (
    <ul className={css.imageGallery}>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        console.log({ webformatURL });
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
          largeImageURL={largeImageURL}
            {...otherProps}
          />
        );
      })}
    </ul>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
  })),
   onClick: PropTypes.func.isRequired,
}
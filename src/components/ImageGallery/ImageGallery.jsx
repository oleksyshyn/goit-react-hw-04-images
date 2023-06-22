import React from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';


const ImageGallery = ({ images, onOpenModal }) => {

    return (
        <ul className={css.imageGallery}>
            {images.map(({id, webformatURL, largeImageURL, tags}) => (
              <ImageGalleryItem
                key={id}
                webImage={webformatURL}
                lagreImage={largeImageURL}
                alt={tags}
                onOpenModal={onOpenModal}
              />
            ))}
        </ul>
    )
}

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  ),
  onOpenModal: PropTypes.func.isRequired,
};



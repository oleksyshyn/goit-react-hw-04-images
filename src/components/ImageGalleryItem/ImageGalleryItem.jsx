import React from "react";
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

function ImageGalleryItem({ webImage, lagreImage, alt, onOpenModal }) {
    return (
        <li className={css.imageGalleryItem}>
            <img src={webImage} alt={alt} className={css.image} onClick={() => onOpenModal(lagreImage)} />
        </li>
    ); 
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    webImage: PropTypes.string.isRequired,
    lagreImage: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onOpenModal: PropTypes.func.isRequired,
};
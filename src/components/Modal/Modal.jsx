import React, { useEffect } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

function Modal({ largeImageURL, onClose }) {
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const handleCloseClick = (e) => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };

    return (
        <div className={css.overlay} onClick={handleCloseClick}>
            <div className={css.modal}>
                <img src={largeImageURL} alt="LargeImage" />
            </div>
        </div>
    );
}

export default Modal;

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
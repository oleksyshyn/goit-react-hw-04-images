import React from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

class Modal extends React.Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        if (e.key === 'Escape') {
            this.props.onClose();
        }
    };

    handleCloseClick = (e) => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
        
    };

    render() {
        const { largeImageURL } = this.props;

        return (
        <div className={css.overlay} onClick={this.handleCloseClick}>
            <div className={css.modal}>
                    <img src={largeImageURL} alt="LargeImage"/>
            </div>
        </div>
    )
    } 
}
export default Modal;


Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
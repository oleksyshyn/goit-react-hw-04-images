import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from '../api/pixabayApi';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Button from './Button/Button';


export class App extends React.Component {
  state = {
    imageName: '',
    images: [],
    isLoading: false,
    page: 1,
    selectedImage: null,
    totalImages: 0
  }

  handleFormSubmit = imageName => {
    this.setState({ imageName, isLoading: true });
    getImages(imageName, 1).then(data => this.setState({ images: data.hits, totalImages: data.totalHits, isLoading: false, page: 1}));
  }

  handleLoadMore = () => {
    const { page, imageName } = this.state;
    const nextPage = page + 1;

    this.setState({ isLoading: true });
      getImages(imageName, nextPage).then(data => this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        page: nextPage,
        isLoading: false,
      })));
  }

  handleOpenModal = selectedImage => {
    this.setState({ selectedImage });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images, isLoading, selectedImage, totalImages } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {isLoading && <Loader />}
        {images.length !== 0 && <ImageGallery images={images} onOpenModal={this.handleOpenModal} />}
        {totalImages > 12 && totalImages !== images.length && <Button onClick={this.handleLoadMore}/>}
        {selectedImage && 
            <Modal
              largeImageURL={selectedImage}
              onClose={this.handleCloseModal}
            />
          }
      </div>
    )
  }
}


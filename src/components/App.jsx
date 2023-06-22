import React, {useState} from 'react';
import Searchbar from './Searchbar/Searchbar';
import { getImages } from '../api/pixabayApi';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Button from './Button/Button';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalImages, setTotalImages] = useState(0);

  const handleFormSubmit = query => {
    setQuery(query);
    setIsLoading(true);
    getImages(query, 1)
      .then((data) => {
        setImages(data.hits);
        setTotalImages(data.totalHits);
        setIsLoading(false);
      });
  }

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setIsLoading(true);

    getImages(query, nextPage)
      .then((data) => {
        setImages(prevImages => [...prevImages, ...data.hits]);
        setPage(nextPage);
        setIsLoading(false);
      });
  }

  const handleOpenModal = selectedImage => {
    setSelectedImage(selectedImage);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      {isLoading && <Loader />}
      {images.length !== 0 && <ImageGallery images={images} onOpenModal={handleOpenModal} />}
      {totalImages > 12 && totalImages !== images.length && <Button onClick={handleLoadMore} />}
      {selectedImage &&
        <Modal
          largeImageURL={selectedImage}
          onClose={handleCloseModal}
        />
      }
    </div>
  );
}

export default App;


import React, { Component } from 'react';
import { fetchImages } from './api.services/api';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import CustomLoader from './Loader/Loader';

import s from './App/App.module/App.module.css';


class App extends Component {
  state = {
    images: [],
    selectedImage: null,
    query: '',
    page: 1,
    isLoading: false,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({ query, images: [], page: 1 });
  };

  fetchImages = async () => {
    const { query, page } = this.state;

    this.setState({ isLoading: true });

    try {
      const images = await fetchImages(query, page);

      this.setState(prevState => ({
        images: [...prevState.images, ...images.hits], 
        page: prevState.page + 1,
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onSelectImage = selectedImage => {
    this.setState({ selectedImage, showModal: true });
  };

  onCloseModal = () => {
    this.setState({ selectedImage: null, showModal: false });
  };

  render() {
    const { images, selectedImage, isLoading, showModal } = this.state;
  
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.onChangeQuery} />
       
        <ImageGallery images={images} onSelect={this.onSelectImage} />
        {isLoading && <CustomLoader />}
        {images.length > 0 && !isLoading && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={this.fetchImages} shouldRender={images.length > 0 && !isLoading && images.length % 12 === 0} />
          </div>
        )}
        {showModal && (
          <Modal image={selectedImage} onClose={this.onCloseModal} />
        )}
      </div>
    );
  }
  
}

export default App;
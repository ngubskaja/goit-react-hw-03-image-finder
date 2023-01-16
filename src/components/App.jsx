import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from '../Services/Api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';



export class App extends Component {
  state = {
    query: '',
    status: 'idle',
    page: 1,
    images: [],
    modalImg: '',
  };


  async componentDidUpdate(_, prevState) {
    const { page, query } = this.state;
  
      if (prevState.query !== query || prevState.page !== page) {
         try {
        this.setState({ status: 'loading' })
        const res = await fetchImages(query, page);
        if (res.total === 0) {
          throw new Error('Images with your query was not found');
        }
         this.setState(prevState => ({
           images: [...prevState.images, ...res.hits],
           status: 'finished'
         }));
      }
     catch (error) {
           toast.error('Oops! Something went wrong! Please try again.');
           }
           this.setState({ status: 'idle' });
  }
  }


     handleSubmit = search => {
      this.setState({
        query: search,
        page: 1,
      images: [],
      });
  };

 

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toggleModal = (image) => {
    this.setState({ modalImg: image });
  }

  render() {
    const { images, status, modalImg } = this.state;
    console.log({images});
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} onClick={this.toggleModal} />
        {status === 'loading' && <Loader />}
        {status === 'finished' && <Button loadMore={this.loadMore} />}
        {modalImg && <Modal image={modalImg} onClose={this.toggleModal} />}
        <ToastContainer />
      </div>
    );
  }
}



// 31322734-692d0c8f8a819df0edc128403
// npm install axios +
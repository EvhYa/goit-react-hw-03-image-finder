import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { GlobalStyle } from './GlobalStyle';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getHits } from './getHits';
import { LoadButton } from './Button/Button';
import { Loader } from './Loader/Loader';
import { ImageModal } from './Modal/Modal';

export class App extends Component {
  state = {
    searchRequest: '',
    pictures: [],
    page: 1,
    loadMore: false,
    loader: false,
    showModal: false,
  };

  onSearchRequestSubmit = request => {
    this.setState({
      searchRequest: request,
      pictures: [],
      page: 1,
      loadMore: false,
      loader: false,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchRequest !== this.state.searchRequest ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loader: true });
      getHits(this.state.searchRequest, this.state.page)
        .then(response => {
          return this.setState(prevState => ({
            pictures: [...prevState.pictures, ...response.data.hits],
            loadMore: this.state.page < Math.ceil(response.data.totalHits / 12),
            loader: false,
          }));
        })
        .catch(error => console.log(error.message))
        .finally();
    }
  }

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      loadMore: false,
    }));
  };

  onShowModal = () => {
    this.setState({ showModal: true });
  };

  onCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <Searchbar onSearchRequestSubmit={this.onSearchRequestSubmit} />
        {this.state.pictures.length > 0 && (
          <ImageGallery pictures={this.state.pictures} onShowModal={this.onShowModal} />
        )}
        {this.state.loadMore && <LoadButton onLoadMore={this.onLoadMore} />}
        {this.state.loader && <Loader />}
        <ImageModal
          showModal={this.state.showModal}
          onCloseModal={this.onCloseModal}
        />
      </div>
    );
  }
}

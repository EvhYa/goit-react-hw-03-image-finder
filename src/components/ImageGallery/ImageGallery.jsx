import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { Gallery } from './IamgeGallery.styled';

export class ImageGallery extends Component {

  render() {
    return (
      <Gallery>
        <ImageGalleryItem pictures={this.props.pictures} onShowModal={this.props.onShowModal} />
      </Gallery>
    );
  }
}

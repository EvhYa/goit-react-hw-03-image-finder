import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './IamgeGallery.styled';

export function ImageGallery({ pictures, onShowModal }) {
  return (
    <Gallery>
      {pictures.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          onShowModal={onShowModal}
          largeImageURL={largeImageURL}
        />
      ))}
    </Gallery>
  );
}

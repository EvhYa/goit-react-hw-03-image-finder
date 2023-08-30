import { GalleryItem } from './ImageGalleryItem.styled';

export function ImageGalleryItem({ pictures, onShowModal }) {
  return pictures.map(({ id, webformatURL, largeImageURL, tags }) => (
    <GalleryItem key={id} onClick={onShowModal}>
      <img src={webformatURL} alt={tags} />
    </GalleryItem>
  ));
}

import { GalleryItem } from './ImageGalleryItem.styled';

export function ImageGalleryItem({
  webformatURL,
  largeImageURL,
  tags,
  onShowModal,
}) {
  return (
    <GalleryItem onClick={()=>onShowModal(largeImageURL, tags)}>
      <img src={webformatURL} alt={tags} url={largeImageURL} />
    </GalleryItem>
  );
}

import ReactModal from 'react-modal';
import { contentStyles, overlayStyles } from './styles';

ReactModal.setAppElement('#root');

export function ImageModal({ largeImageURL, showModal, onCloseModal, tags }) {
  return (
    <div>
      <ReactModal
        isOpen={showModal}
        onRequestClose={onCloseModal}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: overlayStyles,
          content: contentStyles,
        }}
      >
        <div>
          <img src={largeImageURL} alt={tags} />
        </div>
      </ReactModal>
    </div>
  );
}

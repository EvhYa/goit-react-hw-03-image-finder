import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

export function ImageModal({ largeImageURL, showModal, onCloseModal, tags }) {
  return (
    <div>
      <ReactModal
        isOpen={showModal}
        onRequestClose={onCloseModal}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: '1200',
            inset: 0,
          },
          content: {
            maxWidth: 'calc(100vw - 48px)',
            maxHeighteight: 'calc(100vh - 24px)',
            background: 'transparent',
            border: 'none',
            objectFit: 'contain',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
            margin: 0,
            inset: 'auto',
          },
        }}
      >
        <div>
          <img src={largeImageURL} alt={tags} />
        </div>
      </ReactModal>
    </div>
  );
}

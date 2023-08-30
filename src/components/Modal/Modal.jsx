import { Component } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

export class ImageModal extends Component {

  render() {
    return (
      <div>
        <ReactModal
          isOpen={this.props.showModal}
          contentLabel="Minimal Modal Example"
          onRequestClose={this.props.onCloseModal}
          shouldCloseOnOverlayClick={true}
        >
          <img src="" alt="" />
        </ReactModal>
      </div>
    );
  }
}

import Modal from "react-modal";

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal isOpen={true} onRequestClose={onClose}>
      <img src={image} alt="" onClick={onClose} />
    </Modal>
  );
};

export default ImageModal;

import Modal from "react-modal";
import { useEffect } from "react";

Modal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => {
  const imageUrl = image.urls?.regular;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!imageUrl) {
    return null;
  }

  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          overflow: "hidden",
        },
        content: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "transparent",
          border: "none",
          padding: 0,
          overflow: "hidden",
        },
      }}
    >
      <div
        style={{ cursor: "pointer", width: "100%", height: "100%" }}
        onClick={onClose}
      >
        <img
          src={imageUrl}
          alt={image.alt_description}
          style={{
            maxHeight: "90vh",
            maxWidth: "90vw",
            display: "block",
            margin: "auto",
          }}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;

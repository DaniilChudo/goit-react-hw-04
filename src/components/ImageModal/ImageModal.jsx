import Modal from "react-modal";
import { useEffect } from "react";

const ImageModal = ({ image, onClose }) => {
  const imageUrl = image.urls?.regular; // Отримуємо regular версію

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto"; // Відновлюємо прокрутку при закритті модалки
    };
  }, []);

  if (!imageUrl) {
    return null; // Якщо немає URL, нічого не рендеримо
  }

  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          overflow: "hidden", // Забороняє прокрутку заднього фону
        },
        content: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "transparent",
          border: "none",
          padding: 0,
          overflow: "hidden", // Забороняє прокрутку контенту модалки
        },
      }}
    >
      <div
        style={{ cursor: "pointer", width: "100%", height: "100%" }}
        onClick={onClose} // Закриваємо модалку при кліку на область
      >
        <img
          src={imageUrl}
          alt={image.alt_description} // Додаємо alt текст
          style={{
            maxHeight: "90vh",
            maxWidth: "90vw",
            display: "block",
            margin: "auto",
          }} // Зображення не виходить за межі вікна
        />
      </div>
    </Modal>
  );
};

export default ImageModal;

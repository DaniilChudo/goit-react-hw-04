import styles from "./ImageCard.module.css"; // імпортуємо CSS файл

const ImageCard = ({ image, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img
        className={styles.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;

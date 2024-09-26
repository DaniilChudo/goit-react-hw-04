import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard
            image={image}
            onClick={() => onImageClick(image.urls.regular)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

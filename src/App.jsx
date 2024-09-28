import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import { Toaster, toast } from "react-hot-toast";

import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [modalImage, setModalImage] = useState(null);

  const fetchImages = async (query, page) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: { query, page, per_page: 15 },
          headers: {
            Authorization:
              "Client-ID GJpULUubW5j4nubTev8A2anTrfbZ392WuYV3qj6CDK0",
          },
        }
      );
      setImages((prevImages) => [...prevImages, ...response.data.results]);
    } catch (err) {
      setError(err.message);
      toast.error("Error fetching images");
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (query) => {
    setImages([]);
    setQuery(query);
    setPage(1);
    fetchImages(query, 1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    fetchImages(query, page + 1);
  };

  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={setModalImage} />
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {modalImage && (
        <ImageModal image={modalImage} onClose={() => setModalImage(null)} />
      )}
    </div>
  );
};

export default App;

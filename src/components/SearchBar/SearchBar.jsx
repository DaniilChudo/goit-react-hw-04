import { useState } from "react";
import styles from "./SearchBar.module.css";
import { toast } from "react-hot-toast";
import { BsSearchHeart } from "react-icons/bs";

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      toast.error("Please enter a search term.");
      return;
    }
    onSubmit(inputValue);
    setInputValue("");
  };

  const handleIconClick = () => {
    if (!inputValue.trim()) {
      toast.error("Please enter a search term.");
      return;
    }
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <BsSearchHeart className={styles.icon} onClick={handleIconClick} />
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <button className={styles.searchBtn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;

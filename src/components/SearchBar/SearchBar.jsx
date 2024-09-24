import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <header className={styles.header}>
      <form>
        <input
          type="text"
          //autocomplete="off"
          //autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;

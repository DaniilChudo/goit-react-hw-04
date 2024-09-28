import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => (
  <button className={styles.loadBtn} onClick={onClick}>
    Load more
  </button>
);

export default LoadMoreBtn;

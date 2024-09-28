import { Audio } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => (
  <div className={styles.loaderContainer}>
    <Audio
      height="100"
      width="100"
      color="aqua"
      ariaLabel="audio-loading"
      wrapperStyle={{}}
      wrapperClass="wrapper-class"
      visible={true}
    />
    ;
  </div>
);

export default Loader;

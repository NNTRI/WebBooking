import styles from "./ContentDetailImage.module.css";

const ContentDetailImage = (props) => {
  return <img className={styles.image} src={props.image}></img>;
};

export default ContentDetailImage;

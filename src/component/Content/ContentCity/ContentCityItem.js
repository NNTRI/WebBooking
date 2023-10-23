import styles from "./ContentCityItem.module.css";

const ContentCityItem = (props) => {
  return (
    <div className={styles.content}>
      <img src={props.image}></img>
      <div className={styles.content_inner}>
        <h2>{props.name}</h2>
        <h3>{props.subText}</h3>
      </div>
    </div>
  );
};

export default ContentCityItem;

import styles from "./ContentTypeItem.module.css";

const ContentTypeItem = (props) => {
  return (
    <div className={styles.content}>
      <img src={props.image}></img>
      <div className={styles.content_inner}>
        <h3>{props.name}</h3>
        <p>{props.count} hotels</p>
      </div>
    </div>
  );
};

export default ContentTypeItem;

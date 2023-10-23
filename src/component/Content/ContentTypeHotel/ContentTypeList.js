import styles from "./ContentTypeList.module.css";
import ContentTypeItem from "./ContentTypeItem";

const ContentTypeList = (props) => {
  return (
    <div className={styles.flex_container}>
      {props.listType.map((type, index) => (
        <ContentTypeItem
          key={index}
          name={type.name}
          count={type.count}
          image={type.image}
        ></ContentTypeItem>
      ))}
    </div>
  );
};

export default ContentTypeList;

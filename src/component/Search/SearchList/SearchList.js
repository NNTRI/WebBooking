import styles from "./SearchList.module.css";
import SearchListItem from "./SearchListItem";

const SearchList = (props) => {
  return (
    <div className={styles.container_inner}>
      {props.listItem.map((item, index) => (
        <SearchListItem
          key={index}
          name={item.name}
          distance={item.distance}
          tag={item.tag}
          type={item.type}
          description={item.description}
          cancel={item.free_cancel}
          price={item.price}
          rate={item.rate}
          text={item.rate_text}
          image={item.image_url}
        ></SearchListItem>
      ))}
    </div>
  );
};

export default SearchList;

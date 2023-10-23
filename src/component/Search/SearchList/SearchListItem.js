import styles from "./SearchListItem.module.css";

const SearchListItem = (props) => {
  return (
    <div className={styles.container_content}>
      <div className={styles.content_img}>
        <img src={props.image}></img>
      </div>
      <div className={styles.content_inner}>
        <div className={styles.content_inner_title}>
          <span className={styles.title_name}>{props.name}</span>
          <span className={styles.title_rate}>{props.text}</span>
          <span className={styles.title_point}>{props.rate}</span>
        </div>
        <p>{props.distance} from center</p>
        <div className={styles.content_inner_tag}>{props.tag}</div>
        <div className={styles.content_inner_description}>
          <div className={styles.description_text}>
            <p>{props.description}</p>
            <span>{props.type}</span>
          </div>
          <div className={styles.description_price}>
            <p>${props.price}</p>
            <span>Includes taxes and fees</span>
          </div>
        </div>
        <div className={styles.content_inner_book}>
          <div className={styles.book_options}>
            <span>{props.cancel ? "Free cancellation" : ""}</span>
            <p>
              {props.cancel
                ? "You can cancel later, so lock in this great price today!"
                : ""}
            </p>
          </div>
          <div className={styles.book_button}>
            <button>See availability</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchListItem;

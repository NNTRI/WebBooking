import styles from "./ContentHotelItem.module.css";
import { useNavigate } from "react-router-dom";

const ContentHotelItem = (props) => {
  const navigate = useNavigate();
  const loadDetailHandler = () => {
    navigate(`/detail`);
  };

  return (
    <div className={styles.content} onClick={loadDetailHandler}>
      <img src={props.image}></img>
      <div className={styles.content_inner}>
        <a href="#">{props.name}</a>
        <p>{props.city}</p>
        <p>Starting from ${props.price}</p>
        <div>
          <span className={styles.prices}>{props.rate}</span>
          <span> {props.type}</span>
        </div>
      </div>
    </div>
  );
};

export default ContentHotelItem;

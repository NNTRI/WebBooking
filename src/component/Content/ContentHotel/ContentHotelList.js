import styles from "./ContentHotelList.module.css";
import ContentHotelItem from "./ContentHotelItem";

const ContentHotelList = (props) => {
  return (
    <div className={styles.flex_container}>
      {props.listHotel.map((hotel, index) => (
        <ContentHotelItem
          key={index}
          name={hotel.name}
          city={hotel.city}
          price={hotel.price}
          rate={hotel.rate}
          type={hotel.type}
          image={hotel.image_url}
        ></ContentHotelItem>
      ))}
    </div>
  );
};

export default ContentHotelList;

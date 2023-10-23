import styles from "./ContentHotel.module.css";
import ContentHotelList from "./ContentHotelList";

const DUMMY_HOTEL = [
  {
    name: "Aparthotel Stare Miasto",
    city: "Madrid",
    price: 120,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_1.webp",
  },
  {
    name: "Comfort Suites Airport",
    city: "Austin",
    price: 140,
    rate: 9.3,
    type: "Exceptional",
    image_url: "./images/hotel_2.jpg",
  },
  {
    name: "Four Seasons Hotel",
    city: "Lisbon",
    price: 99,
    rate: 8.8,
    type: "Excellent",
    image_url: "./images/hotel_3.jpg",
  },
  {
    name: "Hilton Garden Inn",
    city: "Berlin",
    price: 105,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_4.jpg",
  },
];

const ContentHotel = () => {
  return (
    <div>
      <h2>Homes guests love</h2>
      <div className={styles.container}>
        <ContentHotelList listHotel={DUMMY_HOTEL}></ContentHotelList>
      </div>
    </div>
  );
};

export default ContentHotel;

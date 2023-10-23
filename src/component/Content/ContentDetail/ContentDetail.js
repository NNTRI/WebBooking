import styles from "./ContentDetail.module.css";
import ContentDetailImage from "./ContentDetailImage";

const DUMMY_DETAIL_HOTEL = {
  name: "Tower Street Apartments",
  address: "Elton St 125 New york",
  distance: "Excellent location - 500m from center",
  price: "Book a stay over $114 at this property and get a free airport taxi",
  photos: [
    "./images/hotel_detail_1.jpg",
    "./images/hotel_detail_2.jpg",
    "./images/hotel_detail_3.jpg",
    "./images/hotel_detail_4.jpg",
    "./images/hotel_detail_5.jpg",
    "./images/hotel_detail_6.jpg",
  ],
  title: "Stay in the heart of City",
  description:
    "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
  nine_night_price: 955,
};

const ContentDetail = () => {
  return (
    <div className={styles.container_content}>
      <div className={styles.content_title}>
        <div className={styles.title_name}>{DUMMY_DETAIL_HOTEL.name}</div>
        <button>Reserve or Book Now!</button>
      </div>

      <div className={styles.content_address}>
        <i className="fa fa-map-marker"></i>
        <span>{DUMMY_DETAIL_HOTEL.address}</span>
      </div>
      <div className={styles.content_distance}>
        {DUMMY_DETAIL_HOTEL.distance}
      </div>
      <div className={styles.content_price}>{DUMMY_DETAIL_HOTEL.price}</div>
      <div className={styles.content_image}>
        {DUMMY_DETAIL_HOTEL.photos.map((item, index) => (
          <ContentDetailImage key={index} image={item}></ContentDetailImage>
        ))}
      </div>
      <div className={styles.content_description}>
        <div className={styles.description_title}>
          <h3>{DUMMY_DETAIL_HOTEL.title}</h3>
          <p>{DUMMY_DETAIL_HOTEL.description}</p>
        </div>
        <div className={styles.description_book}>
          <h5>Perfect for a 9-night stay!</h5>
          <p>
            Localed in the real heart of Krakow this porperty has an excellent
            location score of 9.8!
          </p>
          <div className={styles.book_price}>
            <label>${DUMMY_DETAIL_HOTEL.nine_night_price}</label>
            <span> (9night)</span>
          </div>
          <button>Reserve or Book Now!</button>
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;

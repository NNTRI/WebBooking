import styles from "./ContentCity.module.css";
import ContentCityList from "./ContentCityList";

const DUMMY_CITY = [
  {
    name: "Dublin",
    subText: "123 properties",
    image: "./images/city_1.webp",
  },
  {
    name: "Reno",
    subText: "533 properties",
    image: "./images/city_2.webp",
  },
  {
    name: "Austin",
    subText: "532 properties",
    image: "./images/city_3.webp",
  },
];

const ContentCity = () => {
  return (
    <div className={styles.container}>
      <ContentCityList listCity={DUMMY_CITY}></ContentCityList>
    </div>
  );
};

export default ContentCity;

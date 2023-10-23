import styles from "./ContentCityList.module.css";
import ContentCityItem from "./ContentCityItem";

const ContentCityList = (props) => {
  return (
    <div className={styles.flex_container}>
      {props.listCity.map((city, index) => (
        <ContentCityItem
          key={index}
          image={city.image}
          name={city.name}
          subText={city.subText}
        ></ContentCityItem>
      ))}
    </div>
  );
};

export default ContentCityList;

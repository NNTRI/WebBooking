import styles from "./ContentType.module.css";
import ContentTypeList from "./ContentTypeList";

const DUMMY_TYPE = [
  {
    name: "Hotels",
    count: 233,
    image: "./images/type_1.webp",
  },
  {
    name: "Apartments",
    count: 2331,
    image: "./images/type_2.jpg",
  },
  {
    name: "Resorts",
    count: 2331,
    image: "./images/type_3.jpg",
  },
  {
    name: "Villas",
    count: 2331,
    image: "./images/type_4.jpg",
  },
  {
    name: "Cabins",
    count: 2331,
    image: "./images/type_5.jpg",
  },
];

const ContentType = () => {
  return (
    <div>
      <h2>Browse by property type</h2>
      <div className={styles.container}>
        <ContentTypeList listType={DUMMY_TYPE}></ContentTypeList>
      </div>
    </div>
  );
};

export default ContentType;

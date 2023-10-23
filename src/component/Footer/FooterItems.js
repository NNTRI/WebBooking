import styles from "./FooterItems.module.css";

const FooterItems = (props) => {
  return (
    <ul className={styles.list_content}>
      {props.value.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </ul>
  );
};

export default FooterItems;

import styles from "./FooterList.module.css";
import FooterItems from "./FooterItems";

const FooterList = (props) => {
  return (
    <div className={styles.flex_container}>
      {props.list.map((item) => (
        <FooterItems
          key={item.col_number}
          value={item.col_values}
        ></FooterItems>
      ))}
    </div>
  );
};

export default FooterList;

import styles from "./NavBarList.module.css";
import NavBarItem from "./NavBarItem";

const NavBarList = (props) => {
  const changeActive = (index) => {
    console.log("list", index);
    props.onChange(index);
  };

  return (
    <ul className={styles.navbar_menu}>
      {props.items.map((item, index) => (
        <NavBarItem
          key={index}
          id={index}
          type={item.type}
          icon={item.icon}
          active={item.active}
          changeHandler={changeActive}
        ></NavBarItem>
      ))}
    </ul>
  );
};

export default NavBarList;

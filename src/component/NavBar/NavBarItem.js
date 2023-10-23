import styles from "./NavBarList.module.css";

const NavBarItem = (props) => {
  const itemHandler = () => {
    console.log("item", props.id);
    props.changeHandler(props.id);
  };
  return (
    <li
      className={styles[`${props.active ? "active" : ""}`]}
      onClick={itemHandler}
    >
      <i className={`fa ${props.icon}`}></i>
      <a href="#">{props.type}</a>
    </li>
  );
};

export default NavBarItem;

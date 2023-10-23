import styles from "./NavBar.module.css";
import NavBarList from "./NavBarList";
import { useState } from "react";

const DUMMY_NAVBARITEM = [
  {
    type: "Stays",
    icon: "fa-bed",
    active: true,
  },
  {
    type: "Flights",
    icon: "fa-plane",
    active: false,
  },
  {
    type: "Car rentals",
    icon: "fa-car",
    active: false,
  },
  {
    type: "Attractions",
    icon: "fa-bed",
    active: false,
  },
  {
    type: "Airport taxis",
    icon: "fa-taxi",
    active: false,
  },
];

const NavBar = () => {
  const [menuItem, setMenuItem] = useState(DUMMY_NAVBARITEM);
  //console.log("menuitem", menuItem);
  // const changeActiveItem = (key) => {
  //   const listMenuItem = [...DUMMY_NAVBARITEM];

  //   listMenuItem.forEach((item) => {
  //     item.active = false;
  //   });
  //   listMenuItem[key].active = true;
  //   setMenuItem(listMenuItem);
  //   console.log(menuItem);
  // };
  const changeActiveItem = (key) => {
    //const menu = DUMMY_NAVBARITEM;
    setMenuItem((currentMenu) => {
      const menu = [...currentMenu];
      menu.forEach((item) => {
        item.active = false;
      });
      menu[key].active = true;
      return menu;
    });
  };

  return (
    <div className={styles.content}>
      <div className={styles.content_inner}>
        <div className={styles.navbar}>
          <div className={styles.navbar_header}>
            <h3>Booking Website</h3>
            <div className={styles.navbar_header_button}>
              <button>Register</button>
              <button>Login</button>
            </div>
          </div>
          <NavBarList items={menuItem} onChange={changeActiveItem}></NavBarList>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import styles from "./FormControl.module.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { DateRangePicker } from "rsuite";

const FormControl = () => {
  const navigate = useNavigate();

  const changeHandler = () => {
    // const queryParams = new URLSearchParams();
    // queryParams.append("param1", "value1");
    // queryParams.append("param2", "value2");
    //navigate(`/search?${queryParams.toString()}`);
    navigate(`/search`);
  };

  return (
    <div>
      <form className={styles.formcontrol} onSubmit={changeHandler}>
        <div className={styles.input_where}>
          <input type="text" placeholder="Where are you going?"></input>
          <i className="fa fa-bed"></i>
        </div>
        <DateRangePicker format="dd-MM-yyyy" className={styles.custom} />
        <div>
          {/* <input type="text" placeholder="06/24/2022 to 06/24/2022"></input>
          <i className="fa fa-calendar"></i> */}
        </div>
        <div className={styles.input_room}>
          <input
            type="text"
            placeholder="1 adult - 0 children - 1 room"
          ></input>
          <i className="fa fa-male"></i>
        </div>
        <button className={styles.search_button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default FormControl;

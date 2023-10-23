import styles from "./SearchPopup.module.css";

const SearchPopup = () => {
  return (
    <div className={styles.container}>
      <h2>Search</h2>
      <form className={styles.formcontrol}>
        <div className={styles.fromcontrol_inner}>
          <label>Destination</label>
          <input type="text"></input>
        </div>
        <div className={styles.fromcontrol_inner}>
          <label>Check-in Date</label>
          <input type="text" placeholder="06/24/2022 to  06/24/2022"></input>
        </div>
        <div>
          <label>Options</label>
          <div className={styles.formcontrol_options}>
            <div className={styles.title}>Min price per night</div>
            <input type="number"></input>
          </div>
          <div className={styles.formcontrol_options}>
            <div className={styles.title}>Max price per night</div>
            <input type="number"></input>
          </div>
          <div className={styles.formcontrol_options}>
            <div className={styles.title}>Adult</div>
            <input type="number" placeholder="1"></input>
          </div>
          <div className={styles.formcontrol_options}>
            <div className={styles.title}>Children</div>
            <input type="number" placeholder="0"></input>
          </div>
          <div className={styles.formcontrol_options}>
            <div className={styles.title}>Room</div>
            <input type="number" placeholder="1"></input>
          </div>
        </div>
        <button type="submib" className={styles.btn_search}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchPopup;

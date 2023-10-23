import FormControl from "./FormControl";
import styles from "./Headers.module.css";

const Headers = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content_inner}>
        <div className={styles.headers}>
          <h1>A lifetime of discounts? It's Genius</h1>
          <p>
            Get rewarded for your travels - unlock instant savings of 10% or
            more with a free account
          </p>
          <button className={styles.signin_button}>Sign in / Register</button>
          <FormControl></FormControl>
        </div>
      </div>
    </div>
  );
};

export default Headers;

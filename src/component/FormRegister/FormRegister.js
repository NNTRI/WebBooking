import styles from "./FormRegister.module.css";

const FormRegister = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content_inner}>
        <div className={styles.container}>
          <h1>Save time, save money!</h1>
          <p>Sign up and we'll send the best deals to you</p>
          <form className={styles.formregister}>
            <input type="email" placeholder="Your Email"></input>
            <button type="submib"> Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;

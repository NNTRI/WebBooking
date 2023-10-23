import Footer from "../../component/Footer/Footer";
import FormRegister from "../../component/FormRegister/FormRegister";
import NavBar from "../../component/NavBar/NavBar";
import ContentDetail from "../../component/Content/ContentDetail/ContentDetail";
import styles from "./Detail.module.css";

const Detail = () => {
  return (
    <div className={styles.body}>
      <NavBar></NavBar>
      <div className={styles.content_container}>
        <div className={styles.container_inner}>
          <ContentDetail></ContentDetail>
        </div>
      </div>
      <FormRegister></FormRegister>
      <Footer></Footer>
    </div>
  );
};

export default Detail;

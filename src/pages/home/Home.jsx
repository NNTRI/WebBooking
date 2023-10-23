import styles from "./Home.module.css";
import NavBar from "../../component/NavBar/NavBar";
import Headers from "../../component/Header/Headers";
import ContentCity from "../../component/Content/ContentCity/ContentCity";
import ContentType from "../../component/Content/ContentTypeHotel/ContentType";
import ContentHotel from "../../component/Content/ContentHotel/ContentHotel";
import FormRegister from "../../component/FormRegister/FormRegister";
import Footer from "../../component/Footer/Footer";

const Home = () => {
  return (
    <div className={styles.body}>
      <NavBar></NavBar>
      <Headers></Headers>
      <div className={styles.content_container}>
        <div className={styles.container_inner}>
          <ContentCity></ContentCity>
          <ContentType></ContentType>
          <ContentHotel></ContentHotel>
        </div>
      </div>
      <FormRegister></FormRegister>
      <Footer></Footer>
    </div>
  );
};

export default Home;

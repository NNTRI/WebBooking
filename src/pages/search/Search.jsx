import styles from "./Search.module.css";
import { useLocation } from "react-router-dom";
import NavBar from "../../component/NavBar/NavBar";
import FormRegister from "../../component/FormRegister/FormRegister";
import Footer from "../../component/Footer/Footer";
import SearchPopup from "../../component/Search/SearchPopup/SearchPopup";
import Searchs from "../../component/Search/SearchList/Searchs";

const Search = () => {
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const q1 = queryParams.get("param1");
  // console.log(q1);
  return (
    <div className={styles.body}>
      <NavBar></NavBar>
      <div className={styles.content_container}>
        <div className={styles.container_inner}>
          <div className={styles.search_input}>
            <SearchPopup></SearchPopup>
          </div>
          <div className={styles.search_result}>
            <Searchs></Searchs>
          </div>
        </div>
      </div>
      <FormRegister></FormRegister>
      <Footer></Footer>
    </div>
  );
};

export default Search;

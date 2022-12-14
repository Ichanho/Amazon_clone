import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import SearchIcon from "@mui/icons-material/Search"
import { ShoppingBasket } from "@mui/icons-material";
import { useStateValue } from "./StateProvider";

function Header() {
  const[{basket},dispatch] = useStateValue();

  return <div className={styles.header}>
    <Link to="/">
      <img className={styles.logo} src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
    </Link>

    <div className={styles.search}>
      <input className={styles.search_input} type="text"></input>
      <SearchIcon className={styles.search_icon} />
    </div>

    <div className={styles.nav}>
      <div className={styles.option}>
        <span className={styles.option_line_one}>HI</span>
        <span className={styles.option_line_two}>로그인</span>
      </div>
      <div className={styles.option}>
        <span className={styles.option_line_one}>돌아가기</span>
        <span className={styles.option_line_two}>주문내역</span>
      </div>
      <div className={styles.option}>
        <span className={styles.option_line_one}>반가워요</span>
        <span className={styles.option_line_two}>이찬호</span>
      </div>
      <Link to="/basket">
        <div className={styles.option_basket}>
          <ShoppingBasket />
          <span className={styles.count_item}>{basket?.length}</span>
        </div>
      </Link>
    </div>
  </div>;
}

export default Header
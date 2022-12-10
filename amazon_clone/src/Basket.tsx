import styles from "./Basket.module.css"
import SubTotal from "./SubTotal";

function Basket() {

  return <div className={styles.basket}>
    <div className={styles.left}>
      <div className={styles.add}>
        <p>광고 영역</p>
      </div>
      <div className={styles.item}>
        <div className={styles.title}>장바구니 품목 1</div>
      </div>
    </div>
    <div className={styles.right}>
      <SubTotal />
    </div>
  </div>
}

export default Basket;
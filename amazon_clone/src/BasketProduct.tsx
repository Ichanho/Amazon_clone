import styles from "./BasketProduct.module.css"
import { IproductProps } from "./Home"
import { useStateValue } from "./StateProvider";

function BasketProduct({ productInfo }: { productInfo: IproductProps }) {
  const { id, title, img, price, rate } = productInfo;

  const showRate = [0];
  if (rate > 0) {
    showRate.length = Number(rate);
    showRate.fill(0);
  }

  const [{ basket }, dispatch] = useStateValue();

  function removeProduct() {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    })
  }


  return <div className={styles.basket_product}>

    <img className={styles.img} src={img} alt="/" />

    <div className={styles.info}>
      <div className={styles.title}>{title}</div>
      <div className={styles.price}>
        <small>가격 </small>
        <big>{`₩ ${price}`}</big>
        <small>원</small>
      </div>
      <div className={styles.rating}>
        {showRate.map((index) => {
          return <p key={Math.floor(100 * Math.random())}>*</p>
        })}
      </div>

      <button className={styles.btn} onClick={removeProduct}>장바구니에서 제거하기</button>
    </div>


  </div>
}

export default BasketProduct;
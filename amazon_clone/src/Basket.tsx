import styles from "./Basket.module.css"
import BasketProduct from "./BasketProduct";
import SubTotal from "./SubTotal";
import { IproductProps } from "./Home"
import { useStateValue } from "./StateProvider";

function Basket() {
  const [{ basket }, dispatch] = useStateValue();

  return <div className={styles.basket}>

    <div className={styles.left}>
      <div className={styles.add}>
        <p>광고 영역</p>
      </div>
      <div className={styles.item}>
        <div className={styles.title}>장바구니 품목</div>
        {basket.map((product:IproductProps) => {
          const productInfo:IproductProps={
            id: product.id,
            title: product.title,
            img: product.img,
            price: product.price,
            rate: product.rate
          };
          return <BasketProduct productInfo={productInfo}/>
        })}

      </div>
    </div>

    <div className={styles.right}>
      <SubTotal />
    </div>
  </div>
}

export default Basket;
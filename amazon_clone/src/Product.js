import styles from "./Product.module.css"
import { useStateValue } from "./StateProvider";


function Product(productInfo) {
  const { id, title, img, price, rate } = productInfo.productInfo

  const [{basket},dispatch] = useStateValue();

  const a = [0];
  a.length = Number(rate);
  a.fill(0);

  function addToBasket(){
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        img: img,
        price: price,
        rate: rate
      }
    })
    console.log(basket);
  }

  return <div className={styles.product}>
    <div className={styles.info}>
      <p className={styles.name}>{title}</p>
      <div className={styles.price}>
        <small>가격 </small>
        <big>{price}</big>
        <small>원</small>
      </div>
      <div className={styles.rating}>
        {a.map((index)=>{console.log(index);
           return <p key={Math.floor(100*Math.random(Date))}>*</p>})}
      </div>
    </div>
    <img src={img} className={styles.img} />

    <button className={styles.btn} onClick={addToBasket}>장바구니에 담기</button>
  </div>
}

export default Product;
import styles from "./Product.module.css"
import { useStateValue } from "./StateProvider";
import { IproductProps } from "./Home";


function Product({productInfo}:{productInfo:IproductProps}) {
  const { id, title, img, price, rate } = productInfo;

  const [{basket},dispatch] = useStateValue();

  const a = [0];
  a.length = rate;
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
        {a.map((index)=>{
           return <p key={Math.floor(100*Math.random())}>*</p>})}
      </div>
    </div>
    <img src={img} className={styles.img} />

    <button className={styles.btn} onClick={addToBasket}>장바구니에 담기</button>
  </div>
}

export default Product;
import styles from "./Product.module.css"


export interface IproductProps {
  id: number,
  title: string,
  img: string,
  price: number,
  rate: number
}


function Product({productInfo}: {productInfo :IproductProps}) {
  const { id, title, img, price, rate } = productInfo;

  const a:any = [];
  a.length = rate;

  function addToBasket(){
    dispatchEvent()
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
        {a.map(()=><p>*</p>)}
      </div>
    </div>
    <img src={img} className={styles.img} />

    <button className={styles.btn} onClick={addToBasket}>장바구니에 담기</button>
  </div>
}

export default Product;
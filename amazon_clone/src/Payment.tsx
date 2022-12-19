import styles from "./Payment.module.css"
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom"
import { IproductProps } from "./Home";
import BasketProduct from "./BasketProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./Reducer";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { StripeCardElementChangeEvent } from "@stripe/stripe-js";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  function handleDetail(event:React.FormEvent){

  }

  function handleChange(event:StripeCardElementChangeEvent){
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  }

  return <div className={styles.payment}>
    <div className={styles.container}>
      <Link className={styles.link} to="/basket">
        <div className={styles.link}>
          <h1 >장바구니로 돌아가기</h1>
          <h1>({basket?.length}) 개의 상품목록이 존재합니다.</h1>
        </div>
      </Link>

      <div className={styles.section}>
        <div className={styles.title}>
          <h3>배달 받을 곳</h3>
        </div>

        <div className={styles.address}>
          <p>{user?.email} 님의 주소 </p>
          <p>강원도</p>
          <p>철원</p>
        </div>
      </div>


      <div className={styles.section}>
        <div className={styles.title}>
          <h3>상품 목록</h3>
        </div>

        <div className={styles.item}>
          {basket.map((product: IproductProps) => {
            const productInfo: IproductProps = {
              id: product.id,
              title: product.title,
              img: product.img,
              price: product.price,
              rate: product.rate
            };
            return <BasketProduct productInfo={productInfo} />
          })}
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.title}>
          <h3>결제</h3>
        </div>

        <div className={styles.detail}>
          <form onSubmit={handleDetail}>

            <CardElement onChange={handleChange} />

            <div>
              <CurrencyFormat
                renderText={(value: number) => (
                  <>
                    <p>
                      총액 ({basket?.length} item) : <strong> {value}원</strong>
                    </p>
                    <small className={styles.gift}>
                      <input type="checkbox" />
                      체크박스입니다.
                    </small>
                  </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={"₩"}
              />

              <button disabled={processing || disabled}><span>{processing ? <p>결제중입니다.</p> : <p>결제하기</p>}</span></button>

            </div>

            {error && <div>{error}</div>}
          </form>
        </div>

      </div>


    </div>
  </div>
}

export default Payment;
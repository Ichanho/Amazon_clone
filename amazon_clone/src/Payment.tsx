import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import CurrencyFormat from "react-currency-format";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { StripeCardElementChangeEvent } from "@stripe/stripe-js";
import axios from "axios";

import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";

import BasketProduct from "./BasketProduct";

import styles from "./Payment.module.css"

import { IproductProps } from "./Home";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [successed, setSuccessed] = useState(false);

  const [clientSecret, setClientSecret] = useState("");

  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payment/create?total=${getBasketTotal(basket) * 100}`
      });
      setClientSecret(response.data.clientSecret)

      getClientSecret();
    }
  }, [basket]);


  const handleDetail = async (event: React.FormEvent) => {
    event.preventDefault();
    setProcessing(true);

    console.log(elements);

    // if (elements != null && elements.getElement(CardElement) != null) {
    //   const payLoad = await stripe?.confirmCardPayment(clientSecret, {
    //     payment_method: {
    //       card: elements.getElement(CardElement)
    //     }
    //   }).then(({ paymentIntent }) => {
    //     setSuccessed(true);
    //     setError("");
    //     setProcessing(false);
    //     navigate("/orders")
    //   })
    // }

  }

  function handleChange(event: StripeCardElementChangeEvent) {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  }

  return <div className={styles.payment}>
    <div className={styles.container}>
      <Link className={styles.link} to="/basket">
        <div className={styles.link}>
          <h1 >??????????????? ????????????</h1>
          <h1>({basket?.length}) ?????? ??????????????? ???????????????.</h1>
        </div>
      </Link>

      <div className={styles.section}>
        <div className={styles.title}>
          <h3>?????? ?????? ???</h3>
        </div>

        <div className={styles.address}>
          <p>{user?.email} ?????? ?????? </p>
          <p>?????????</p>
          <p>??????</p>
        </div>
      </div>


      <div className={styles.section}>
        <div className={styles.title}>
          <h3>?????? ??????</h3>
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
          <h3>??????</h3>
        </div>

        <div className={styles.detail}>
          <form onSubmit={handleDetail}>

            <CardElement onChange={handleChange} />

            <div>
              <CurrencyFormat
                renderText={(value: number) => (
                  <>
                    <p>
                      ?????? ({basket?.length} item) : <strong> {value}???</strong>
                    </p>
                    <small className={styles.gift}>
                      <input type="checkbox" />
                      ?????????????????????.
                    </small>
                  </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={"???"}
              />

              <button disabled={processing || disabled || successed}><span>{processing ? <p>??????????????????.</p> : <p>????????????</p>}</span></button>

            </div>

            {error && <div>{error}</div>}
          </form>
        </div>

      </div>


    </div>
  </div>
}

export default Payment;
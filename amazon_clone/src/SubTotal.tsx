import styles from "./SubTotal.module.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";
import { useNavigate } from "react-router-dom";

function SubTotal() {
  const [{basket}, dispatch] = useStateValue();
  const navigate = useNavigate();

  return <div className={styles.sub_total}>
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
    <button onClick={(e)=>{navigate("/payment")}} className={styles.btn}>결제하기</button>

  </div>
}

export default SubTotal;
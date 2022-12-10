import styles from "./SubTotal.module.css";
import CurrencyFormat from "react-currency-format";

function SubTotal() {

  return <div className={styles.sub_total}>
    <CurrencyFormat
      renderText={(value: number) => (
        <>
          <p>
            총액 (0 item) : <strong> 10원</strong>
          </p>
          <small className={styles.gift}>
            <input type="checkbox" />
            체크박스입니다.
          </small>
        </>
      )}

      decimalScale={2}
      value={0}
      displayType={'text'}
      thousandSeparator={true}
      prefix={"₩"}
    />
    <button className={styles.btn}>결제하기</button>

  </div>
}

export default SubTotal;
import Product from "./Product";
import styles from "./Home.module.css"

interface IproductProps {
  id: number,
  title: string,
  img: string,
  price: number,
  rate: number
}

function Home() {

  const propsOfProduct: IproductProps = {
    id: 1,
    title: "상품명",
    img: "https://camo.githubusercontent.com/59f34522112650b0eb7e9542af81c8129193d96002728d451069d002d30b17a0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f435353332d3135373242363f7374796c653d666c61742d737175617265266c6f676f3d43535333266c6f676f436f6c6f723d7768697465",
    price: 10100,
    rate: 5
  }

  return <div className={styles.home}>

    <div className={styles.container}>
      <img src="https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg" alt="" className={styles.image} />

      <div className={styles.row}>
        <Product productInfo={propsOfProduct} />
        <Product productInfo={propsOfProduct} />
      </div>
      <div className={styles.row}>
        <Product productInfo={propsOfProduct} />
      </div>
      <div className={styles.row}>
        <Product productInfo={propsOfProduct} />
        <Product productInfo={propsOfProduct} />
      </div>
    </div>
  </div>
}

export default Home;
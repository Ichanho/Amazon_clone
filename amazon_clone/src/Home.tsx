import Product from "./Product";
import styles from "./Home.module.css"

 export interface IproductProps {
  id: number,
  title: string,
  img: string,
  price: number,
  rate: number
}

function Home() {

  const propsOfProduct1 : IproductProps = {
    id: 1,
    title: "상품명1",
    img: "https://camo.githubusercontent.com/59f34522112650b0eb7e9542af81c8129193d96002728d451069d002d30b17a0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f435353332d3135373242363f7374796c653d666c61742d737175617265266c6f676f3d43535333266c6f676f436f6c6f723d7768697465",
    price: 10100,
    rate: 5
  }

  const propsOfProduct2 : IproductProps = {
    id: 2,
    title: "상품명2",
    img: "https://camo.githubusercontent.com/59f34522112650b0eb7e9542af81c8129193d96002728d451069d002d30b17a0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f435353332d3135373242363f7374796c653d666c61742d737175617265266c6f676f3d43535333266c6f676f436f6c6f723d7768697465",
    price: 1600,
    rate: 3
  }

  const propsOfProduct3 : IproductProps = {
    id: 3,
    title: "상품명3",
    img: "https://camo.githubusercontent.com/59f34522112650b0eb7e9542af81c8129193d96002728d451069d002d30b17a0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f435353332d3135373242363f7374796c653d666c61742d737175617265266c6f676f3d43535333266c6f676f436f6c6f723d7768697465",
    price: 670,
    rate: 4
  }

  const propsOfProduct4 : IproductProps = {
    id: 4,
    title: "상품명4",
    img: "https://camo.githubusercontent.com/59f34522112650b0eb7e9542af81c8129193d96002728d451069d002d30b17a0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f435353332d3135373242363f7374796c653d666c61742d737175617265266c6f676f3d43535333266c6f676f436f6c6f723d7768697465",
    price: 98920,
    rate: 1
  }
  const propsOfProduct5 : IproductProps = {
    id: 5,
    title: "상품명5",
    img: "https://camo.githubusercontent.com/59f34522112650b0eb7e9542af81c8129193d96002728d451069d002d30b17a0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f435353332d3135373242363f7374796c653d666c61742d737175617265266c6f676f3d43535333266c6f676f436f6c6f723d7768697465",
    price: 108980,
    rate: 5
  }

  return <div className={styles.home}>

    <div className={styles.container}>
      <img src="https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg" alt="" className={styles.image} />

      <div className={styles.row}>
        <Product productInfo={propsOfProduct1} />
        <Product productInfo={propsOfProduct2} />
      </div>
      <div className={styles.row}>
        <Product productInfo={propsOfProduct3} />
      </div>
      <div className={styles.row}>
        <Product productInfo={propsOfProduct4} />
        <Product productInfo={propsOfProduct5} />
      </div>
    </div>
  </div>
}

export default Home;
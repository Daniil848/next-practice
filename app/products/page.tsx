import axios from "axios";
import type {Product} from "../types";
import styles from "./Product.module.scss"


const getProducts = async () => {
  const {data} = await axios.get('https://fakestoreapi.com/products');
  return data;
};

export default async function Products() {
  const products: Product[] = await getProducts();

  console.log(products);
  
  
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <div key={product.id} className={styles.product}>
          <div className={styles.productImgContainer}>
            <img src={product.image} alt="product-img" className={styles.productImg} />
          </div><div className={styles.productInfo}>
              <p className={styles.productInfoTitle}>{product.title}</p>
              <div className={styles.productInfoBuy}>
                <div>
                  <p className={styles.productInfoRating}>
                    <span className={styles.productInfoRatingRate}>{product.rating.rate}</span>
                    <span className={styles.productInfoRatingImg}></span>
                  </p>
                  <p className={styles.productInfoPrice}>${product.price}</p>
                </div>
                <button className={styles.productBuy}>Buy</button>
              </div>

            </div>
          </div>
      ))}
    </div>
  )
}
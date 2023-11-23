import Link from "next/link";
import styles from "./Product.module.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Product } from "@/types/types";

export const ProductCard = ({product}: {product: Product}) => {
  return (
    <Link
    href={`/product/${product.id}`}
    className={styles.product}
  >
    <div className={styles.productImgContainer}>
      <img src={product.image} alt="product-img" className={styles.productImg} />
    </div>
    <div className={styles.productInfo}>
      <p className={styles.productInfoTitle}>{product.title}</p>
      <div className={styles.productInfoBuy}>
        <div>
          <p className={styles.productInfoRating}>
            <span className={styles.productInfoRatingRate}>{product.rating.rate}</span>
            <span className={styles.productInfoRatingImg}>{/*<FontAwesomeIcon icon={faStar}/>*/}</span>
          </p>
          <p className={styles.productInfoPrice}>${product.price}</p>
        </div>
        <button className={styles.productBuy}>Buy</button>
      </div>
    </div>
  </Link>
  );
};
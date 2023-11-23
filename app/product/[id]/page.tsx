import { getSingleProduct } from "@/services/fetching";
import styles from "./ProductPage.module.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Product } from "@/types/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Product',
  description: 'Product page',
};

type Props = {
  params : {
    id : number;
  }
};

const Product = async({params : {id}} : Props) => {
  const product : Product | undefined = await getSingleProduct(id);

  if (product === undefined) return null;
  return (
    <>
      <div className={styles.product}>
        <div className={styles.wrapper}>
          <div className={styles.productImgContainer}>
            <img src={product?.image} alt="product-img" className={styles.productImg}/>
          </div>
          <div className={styles.productInfoContainer}>
            <div className={styles.wrapper}>
              <h1 className={styles.productTitle}>{product?.title}</h1>
              <p className={styles.productCategory}>{product?.category}</p>
              <span className={styles.productLine}></span>
            </div> 
            <p className={styles.productInfoRating}>
              <span className={styles.productInfoRatingRate}>{product?.rating?.rate}</span>
              <span className={styles.productInfoRatingImg}>{/*<FontAwesomeIcon icon={faStar}/>*/}</span>
            </p>
            <p className={styles.productPrice}>{product?.price} $</p>
            <button className={styles.productButton}>Add to card</button>
          </div>
        </div>
        <div className={styles.productDescriptionContainer}>
          <p className={styles.productDescriptionTitle}>Description:</p>
          <p className={styles.productDescription}>{product?.description}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
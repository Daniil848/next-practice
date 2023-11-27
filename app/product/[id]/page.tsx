
import { getSingleProduct } from "@/services/fetching";
import styles from "./ProductPage.module.scss";
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

const Product = async({params : {id}} : Props,) => {
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
              <svg className={styles.productInfoRatingImg} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 47.94 47.94" xmlSpace="preserve">
              <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                C22.602,0.567,25.338,0.567,26.285,2.486z"/>
              </svg>
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
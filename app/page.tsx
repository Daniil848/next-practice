import { getProducts } from "@/services/fetching";
import type {Product} from "../types/types";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Products.module.scss";
import SideBar from "../components/SideBar";
import Link from "next/link";

export default async function Home() {
  const products: Product[] = await getProducts();
  
  return (
    <>
    <div className={styles.products}>
      {products?.map((product: Product) => (
        <Link 
          href={`/product/${product.id}`} 
          key={product.id} 
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
                  <span className={styles.productInfoRatingImg}><FontAwesomeIcon icon={faStar}/></span>
                </p>
                <p className={styles.productInfoPrice}>${product.price}</p>
              </div>
              <button className={styles.productBuy}>Buy</button>
            </div>
          </div>
        </Link>
      ))}
    </div>
    <SideBar/>
    </>
  )
}

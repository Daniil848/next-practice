"use client"

import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import { getSingleCart, getProductsInCart } from "@/services/fetching";
import { Product } from "@/types/types";
import Link from "next/link";
import styles from "./Cart.module.scss";


const Cart = () => {
  const [products, setProducts] = useState<Product[] | undefined>([]);
  const [quantity, setQuantity] = useState<any[] | undefined>([]);
  const [total, setTotal] = useState<number | undefined>(0);

  useEffect(()=> {
    const fetchData = async () => {
      const id = getCookie('userID');   

      const cart =  await getSingleCart(Number(id));
      
      const productIds = cart?.products.map(product => product.productId);
      const products = await getProductsInCart(productIds);
      
      setProducts(products);
      
      const quantity = cart?.products.map(product => product.quantity);
      setQuantity(quantity);

      const totalPrice = products?.reduce((total, product, index) => {
        if (Array.isArray(quantity) && quantity[index]) {
          return total + (product.price * quantity[index]);
        } else {
          return total;
        }
      }, 0);
      setTotal(totalPrice);

    };

    fetchData();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.products}>
          {products?.map((product : Product, index : number) => (
            <Link
              href={`/product/${product.id}`}
              className={styles.product}
              key={product.id}
            >
              <div className={styles.productImgContainer}>
                <img src={product.image} alt="product-img" className={styles.productImg} />
              </div>
              <div className={styles.productInfo}>
                <p className={styles.productInfoTitle}>{product.title}</p>
                {quantity && quantity[index] &&<p className={styles.productInfoCount}>Quantity: {quantity[index]}</p>}
                <div className={styles.productInfoBuy}>
                {quantity && quantity[index] &&<p className={styles.productInfoPrice}>${product.price * quantity[index]}</p>}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.total}>
          <div className={styles.totalText}>
            <p className={styles.totalTextItem}>Total:</p>
            <p className={styles.totalTextItem}>{total}$</p>
          </div>
          <button className={styles.totalButton}>BUY</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
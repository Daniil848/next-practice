"use client"

import { ProductCard } from "../components/ProductCard/ProductCard";
import { getProducts } from "@/services/fetching";
import type {Product} from "../types/types";
import styles from "./Products.module.scss";
import SideBar from "../components/SideBar/SideBar";
import useSWR from "swr";


const Home = () => {
  const {data : products, isLoading, error} = useSWR("products", getProducts);
  
  return (
    <>
      <SideBar/>
      <div className={styles.products}>
        {products?.map((product: Product) => (
          <ProductCard
            key={product.id} 
            product={product}
          />
        ))}
      </div>
    </>
  )
}

export default Home;
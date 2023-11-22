"use client"

import useSWR from "swr";
import styles from "./SideBar.module.scss";
import { getProductsInSpecificCategory, getProducts, getCategories } from "@/services/fetching";

const SideBar = () => {
  const {data : categories} = useSWR("categories", getCategories);
  const { mutate } = useSWR("products");

  const handleCategory = async (category : string) => {
    const  products = await getProductsInSpecificCategory(category);
    mutate(products);
  };

  const handleClear = async () => {
    const products = await getProducts();
    mutate(products);
  };

  if(categories === undefined) return null;

  return (
    <>
      <aside className={styles.sideBar}>
        <div className={styles.wrapper}>
          <p className={styles.sideBarTitle}>Categoties:</p>
          <ul className={styles.sideBarList}>
            {categories?.map((category, index) => (
            <li key={index}>
              <button
                className={styles.sideBarListItem}
                onClick={() => handleCategory(category)}
              >{category}</button>
            </li>))}
          </ul>
          <button 
            className={styles.sideBarReset}
            onClick={() => handleClear()}
          >reset filter</button> 
        </div>
      </aside>
    </>
  );
};

export default SideBar;
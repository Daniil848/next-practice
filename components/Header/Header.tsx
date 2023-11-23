'use client'

import { useState } from "react";
import useSWR from "swr";
import { getProductsBySearch } from "@/services/fetching";
import Registration from "../Registration/Registration";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.scss";

const Header = () => {
  const { mutate } = useSWR("products");

  const [signIn, setSignIn] = useState<boolean>(false);
  const [logIn, setLogIn] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const handleSearch= async () => {
    const  products = await getProductsBySearch(search);
    mutate(products);
  };

  const handleLogIn = () => {
    setLogIn(true);
    setSignIn(false);
  };

  const handleSignIn = () => {
    setSignIn(true);
    setLogIn(false);
  };

  return (
    <>
      <Registration 
        logIn={logIn}
        signIn={signIn}
        closeLogIn={setLogIn}
        closeSignIn={setSignIn}
      />
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div>
            <div className={styles.headerLogo}></div>
          </div>
          <form 
            className={styles.headerSearch} 
            onSubmit={(e)=> {
              handleSearch()
              e.preventDefault()
            }}
          > 
            {/* <FontAwesomeIcon className={styles.headerSearchIcon} icon={faMagnifyingGlass}/> */} 
            <input 
              type="search" 
              id="default-search" 
              value={search} 
              onChange={(e)=> setSearch(e.target.value)} 
              className={styles.headerSearchInput} 
              placeholder="Search products"
            />
            <button 
              type="submit" 
              className={styles.headerSearchButton} 
            >Search</button>
          </form>
          <div className={styles.rightContent}>
            <button className={styles.headerProfileBasket}>{/* <FontAwesomeIcon icon={faBasketShopping}/>*/}</button> 
          </div>
          <div className={styles.registration}>
            <button 
              className={styles.registrationLogIn}
              onClick={() => handleLogIn()}
            >Log in</button>
            <button 
              className={styles.registrationSignIn}
              onClick={() => handleSignIn()}
            >Sign in</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
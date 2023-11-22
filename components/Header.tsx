'use client'

import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Registration from "./Registration";

const Header = () => {
  const [signIn, setSignIn] = useState<boolean>(false);
  const [logIn, setLogIn] = useState<boolean>(false);

  const handleLogIn = () => {
    setLogIn(true);
    setSignIn(false);
  }
  const handleSignIn = () => {
    setSignIn(true);
    setLogIn(false);
  }

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
          <form className={styles.headerSearch}> 
            <FontAwesomeIcon className={styles.headerSearchIcon} icon={faMagnifyingGlass}/>  
            <input type="search" id="default-search" className={styles.headerSearchInput} placeholder="Search products" required></input>
            <button type="submit" className={styles.headerSearchButton}>Search</button>
          </form>
          <div className={styles.rightContent}>
            <button className={styles.headerProfileBasket}><FontAwesomeIcon icon={faBasketShopping}/></button>
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
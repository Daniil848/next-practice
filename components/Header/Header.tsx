'use client'

import { useState } from "react";
import useSWR from "swr";
import { getCookie } from "cookies-next";
import Registration from "../Registration/Registration";
import { getProductsBySearch } from "@/services/fetching";
import styles from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
  const { mutate } = useSWR("products");

  const cookie = getCookie("userID");

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
            <svg className={styles.headerSearchIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#64748b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
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
          {cookie === null || undefined ?
            <div className={styles.registration}>
              <button 
                className={styles.registrationSignIn}
                onClick={() => handleLogIn()}
              >Log in</button> 
              {/* <button 
                className={styles.registrationSignIn}
                onClick={() => handleSignIn()}
              >Sign in</button> */}
            </div>  
            :
            <Link
              href={"/cart"}
            >
              <svg className={styles.headerProfileBasket} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 4C10.4508 4 9.0799 5.00309 8.61115 6.47966L7.81104 9H8.49995H15.5H16.1889L15.3888 6.47966C14.92 5.00309 13.5491 4 12 4ZM18.2872 9L17.295 5.8745C16.5626 3.56734 14.4206 2 12 2C9.57933 2 7.43733 3.56734 6.7049 5.8745L5.71268 9H3.34789C2.00585 9 1.04464 10.2956 1.43384 11.58L2.55808 15.29L3.94596 19.87C4.32928 21.135 5.49529 22 6.81704 22H9.99995H14H17.1829C18.5046 22 19.6706 21.135 20.0539 19.87L21.4418 15.29L22.5661 11.58C22.9553 10.2956 21.9941 9 20.652 9H18.2872ZM6.4444 11H3.34789L4.25698 14H8.03615L7.62706 11H6.4444ZM9.64557 11L10.0547 14H13.9452L14.3543 11H9.64557ZM16.3728 11L15.9638 14H19.7429L20.652 11H17.5555H16.3728ZM19.1369 16H15.691L15.1456 20H17.1829C17.6235 20 18.0121 19.7117 18.1399 19.29L19.1369 16ZM13.1271 20L13.6725 16H10.3274L10.8728 20H13.1271ZM8.85434 20L8.30888 16H4.86304L5.86001 19.29C5.98778 19.7117 6.37646 20 6.81704 20H8.85434Z"/>
              </svg>
            </Link>}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
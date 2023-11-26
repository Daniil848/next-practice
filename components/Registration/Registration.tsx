"use client"

import { User } from "@/types/types";
import { useState, useEffect } from "react";
import { signInFetch, logInFetch, getUsers } from "@/services/fetching";
import styles from "./Registration.module.scss";
import { setCookie, getCookie } from "cookies-next";

type Props = {
  logIn : boolean,
  signIn : boolean,
  closeLogIn : Function,
  closeSignIn : Function,
}

const Registration = ({logIn, signIn, closeLogIn, closeSignIn} : Props) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // let userDB : User = {
  //   id : 0,
  //   email : email,
  //   username : userName,
  //   password : password,
  // };

  let userLogIn = {
    username : userName,
    password : password,
  }

  // const handleSignIn = async () => {
  //   if ( email !== "" && userName !== "" && password !== "" ) {
  //     await signInFetch(userDB)
  //   }
  // };

  const handleLogIn = async () => {
    if ( userName !== "" && password !== "" ) {
      const user = await logInFetch(userLogIn);
      const coockieId = user[0]
      
      setCookie("userID", `${coockieId.id}`, {maxAge : 100000});
    }
  };

  const handleClose = () => {
    closeLogIn(false);
    closeSignIn(false);
  };

  useEffect(() => {
    getUsers();
  },[])

  if (signIn || logIn === true) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.form}>
          <button className={styles.formClose} onClick={() => handleClose()}>X</button>
          <p className={styles.formTitle}>{logIn === true ? "Log In" : "Sign In"}</p>
           <div className={styles.inputsWrapper}>
            <input type="text" placeholder="User name" onChange={e => setUserName(e.target.value)} className={styles.input}/>
          </div>
          {signIn &&<div className={styles.inputsWrapper}>
            <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} className={styles.input}/>
          </div>}
          <div className={styles.inputsWrapper}>
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} className={styles.input}/>
          </div>
          {signIn && <button
            className={styles.button}
          >Sign In</button>}
          {logIn && <button
            className={styles.button}
            onClick={()=> handleLogIn()}
          >Log In</button>}
        </div>
      </div>
    );
  } else {
    return null
  }
};

export default Registration;
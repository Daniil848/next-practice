"use client"

import { User } from "@/types/types";
import { useState } from "react";
import useSWR from "swr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./Registration.module.scss";
import { signInFetch } from "@/services/fetching";

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

  let userDB : User = {
    id : 0,
    email : email,
    username : userName,
    password : password,
  };

  const handleSignIn = async () => {
    if ( email !== "" && userName !== "" && password !== "" ) {
      await signInFetch(userDB)
    }
  }

  const handleClose = () => {
    closeLogIn(false);
    closeSignIn(false);
  }

  if (signIn || logIn === true) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.form}>
          <button className={styles.formClose} onClick={() => handleClose()}><FontAwesomeIcon icon={faXmark}/></button>
          <p className={styles.formTitle}>{logIn === true ? "Log In" : "Sign In"}</p>
          {signIn && <div className={styles.inputsWrapper}>
            <input type="text" placeholder="User name" onChange={e => setUserName(e.target.value)} className={styles.input}/>
          </div>}
          <div className={styles.inputsWrapper}>
            <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} className={styles.input}/>
          </div>
          <div className={styles.inputsWrapper}>
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} className={styles.input}/>
          </div>
          <button
            className={styles.button}
            onClick={()=> handleSignIn()}
          >OK</button>
        </div>
      </div>
    );
  } else {
    return null
  }
};

export default Registration;
"use client"

import { useState } from "react";
import styles from "./Registration.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type Props = {
  logIn : boolean,
  signIn : boolean,
}

const Registration = ({logIn, signIn} : Props) => {

  const [shouldClose, setShouldClose] = useState(false);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (shouldClose === true) return null;
  if (signIn || logIn === true) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.form}>
          <button className={styles.formClose} onClick={() => setShouldClose(true)}><FontAwesomeIcon icon={faXmark}/></button>
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
          {signIn && <div className={styles.inputsWrapper}>
            <input type="password" placeholder="Confirm Password" className={styles.input}/>
          </div>}
          <button className={styles.button}>OK</button>
        </div>
      </div>
    );
  }
};

export default Registration;
import styles from "./SideBar.module.scss"

const SideBar = () => {

  

  return (
    <>
      <aside className={styles.sideBar}>
        <div className={styles.wrapper}>
          <p className={styles.sideBarTitle}>Categoties:</p>
          
            <ul className={styles.sideBarList}>
              <li>
                <button 
                className={styles.sideBarListItem}
                
                >category</button>
              </li>
            </ul>
          
          <button 
          className={styles.sideBarReset}
          
          >reset filter</button>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
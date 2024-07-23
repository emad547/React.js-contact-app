import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.headerContainer}>
        <h1>Contact App</h1>
        <p className={styles.description}><span>Emad Zare</span> | React.js</p>
    </div>
  )
}

export default Header
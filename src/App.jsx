import Header from "./Header.jsx"
import Contacts from "./Contacts.jsx"

import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Contacts />
    </div>
  )
}

export default App
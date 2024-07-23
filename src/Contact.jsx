import mailbox from "../public/mailbox.svg"
import telephone from "../public/telephone.svg"
import trash from "../public/trash3.svg"
import styles from "./Contact.module.css"
function Contact({data: {id, name, lastName, email, phone}, setContacts}) {

  function removeContact () {
    setContacts(contacts => {
      const copyContacts = [...contacts]
      const filteredContacts = copyContacts.filter(item => !(item.id === id))

      return filteredContacts
    })
  }

  return (
    <div className={styles.contactDataBox}>
      <p>{name} {lastName}</p>
      <p><img src={mailbox} alt="email" /> {email}</p>
      <p><img src={telephone} alt="phone" /> {phone}</p>
      <button className={styles.removeBtn} onClick={removeContact}><img src={trash} alt="remove" /></button>
    </div>
  )
}

export default Contact
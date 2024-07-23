import { useState } from "react"
import { v4 } from "uuid"
import Contact from "./Contact.jsx"
import styles from "./Contacts.module.css"

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: ""
  })

  const [isShowError, setIsShowError] = useState(false)

  const [contacts, setContacts] = useState([])

  function formHandler (event) {
    const elementName = event.target.name
    const elementValue = event.target.value
    setFormData(formData => ({...formData, [elementName]: elementValue}))
  }

  function submitHandler () {
    for (const prop in formData) {
      if (formData[prop] === "") {
        setIsShowError(true)
        return;
      } else {
        setIsShowError(false)
      }
    }

    // create a new contact
    const formDataCopy = {id: v4(), ...formData}

    setContacts(prevData => ([...prevData, formDataCopy]))

    setFormData({name: "", lastName: "", email: "", phone: ""})
  }

  return (
    <>
        <section className={styles.form}>
          <div>
            <div className={styles.inputBox}>
              <input type="text" name="name" value={formData.name} placeholder="Name" onChange={formHandler} />
              <input type="text" name="lastName" value={formData.lastName} placeholder="Last Name" onChange={formHandler} />
            </div>
            <div className={styles.inputBox}>
              <input type="text" name="email" value={formData.email} placeholder="Email" onChange={formHandler} />
              <input type="text" name="phone" value={formData.phone} placeholder="Phone" onChange={formHandler} />
            </div>
            <button className={styles.addContactBtn} onClick={submitHandler}>Add Contact</button>
          </div>
        </section>

        <p className={`${styles.errorBox} ${isShowError && styles.active}`}>please enter valid data!</p>

        <section className={styles.contactsBox}>
          <h2>Contacts List</h2>
          {/* contacts box styles + conatact.jsx styles + remove btn */}
          <div className={`${styles.contactsContainer} ${contacts.length === 0 && styles.centerContent}`}>
            {
              contacts.length === 0 ? "no contacts yet!" : contacts.map(contactData => <Contact key={contactData.id} data={contactData} setContacts={setContacts} />)
            }
          </div>
        </section>
    </>
  )
}

export default Contacts
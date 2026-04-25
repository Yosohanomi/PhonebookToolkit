import { useDispatch, useSelector } from "react-redux"
import { deleteContact } from "../../app/redux/phoneBookSlice"
import styles from './ContactList.module.css'

export const ContactList = () => {
    const dispatcher = useDispatch()
    const contacts = useSelector((state) => state.phoneBookSlice.phoneBook)
    
    const handleBtnDelete = (id) => {
        dispatcher(deleteContact(id))
    }
    
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Contacts</h3>
            <ul className={styles.contactList}>
                {
                    contacts.map(contact => (
                        <li key={contact.id} className={styles.contactItem}>
                            <div className={styles.contactInfo}>
                                <h4 className={styles.contactName}>{contact.title}</h4>
                                <p className={styles.contactPhone}>{contact.phoneNumber}</p>
                                <p className={styles.contactEmail}>{contact.email}</p>
                            </div>
                            <button 
                                className={styles.deleteButton}
                                onClick={()=>handleBtnDelete(contact.id)} 
                                type="button"
                            >
                                Delete
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
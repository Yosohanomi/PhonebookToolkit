import { AddContact } from "../components/AddContact/AddContact"
import { ContactList } from "../components/ContactList/ContactList"
import styles from './Homepage.module.css'

export const Homepage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.mainTitle}>Phonebook</h1>
                <AddContact/>
                <ContactList/>
            </div>
        </div>
    )
}
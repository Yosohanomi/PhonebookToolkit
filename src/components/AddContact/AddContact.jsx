import { useState } from "react"
import { useDispatch } from "react-redux"
import { addContact } from "../../app/redux/phoneBookSlice"
import styles from './AddContact.module.css'

export const AddContact = () => {
    const [title, setTitle] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const dispatcher = useDispatch()

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleChangePhoneNumber = (e) => {
        setphoneNumber(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleBtnClick = () => {
        if (title.trim() && phoneNumber.trim() && email.trim()) {
            dispatcher(addContact({
                title: title, 
                email: email, 
                phoneNumber: phoneNumber,
                id: Date.now()
            }))
            setTitle("")
            setphoneNumber("")
            setEmail("")
        }
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>новий контакт</h3>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.inputGroup}>
                    <input 
                        className={styles.input}
                        onChange={handleChangeTitle}  
                        value={title} 
                        placeholder="Name..." 
                        type="text" 
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <input 
                        className={styles.input}
                        onChange={handleChangePhoneNumber}  
                        value={phoneNumber} 
                        placeholder="Phone number..." 
                        type="tel" 
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <input 
                        className={styles.input}
                        onChange={handleChangeEmail}  
                        value={email} 
                        placeholder="Email..." 
                        type="email" 
                    />
                </div>
                <button type="button" className={styles.saveButton} onClick={handleBtnClick}>
                    Save
                </button>
            </form>
        </div>
    )
}
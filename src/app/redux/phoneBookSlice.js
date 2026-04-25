import { createSlice } from "@reduxjs/toolkit";

const phoneBookSlice = createSlice(
    {
        name: "phoneBook",
        initialState: {
            phoneBook: [{
                title: "Example",
                phoneNumber: "+3802819831",
                id: Date.now(),
                email: "someone@gmail.com"
            }],
        },
        reducers: {
            addContact: (state, action) => {
                state.phoneBook.push(action.payload)
            },
            deleteContact: (state, action) => {
                state.phoneBook = state.phoneBook.filter(contact => contact.id !== action.payload)
            }
        },
    }
)

export const {addContact, deleteContact} = phoneBookSlice.actions
export default phoneBookSlice.reducer
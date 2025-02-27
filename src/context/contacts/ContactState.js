import React, { useReducer } from 'react'
import axios from 'axios'
import uuid from "uuid";
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER, GET_CONTACTS} from '../types'


const ContactState = props => {
    const initialState = {
        contacts: null,
        current: null,
        filtered: null,
        error: null
    }

    const [state, dispatch ] = useReducer(contactReducer, initialState)

        // Get Contacts
        const getContacts = async () => {


            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    
                dispatch({ type: GET_CONTACTS, payload: res.data})
            } catch(err) {
                dispatch(console.log(err))
            }
    
            
        }  

    // Add contact
    const addContact = contact => {
        contact.id = uuid.v4()
        dispatch({ type: ADD_CONTACT, payload: contact})
    }

    // Delete Contact
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id})
    }

    // Set Current Contact
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact })
    }

    // Clear Current Contact
    const clearCurrent = contact => {
        dispatch({ type: CLEAR_CURRENT })
    }


    // Update Contacts

    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact })
    }

    // Filter Contacts

    const filterContacts = text => {
        dispatch({ type: FILTER_CONTACTS, payload: text })
    }

    // Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER })
    }

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                getContacts,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContacts,
                clearFilter
            }}>
            { props.children }
        </ContactContext.Provider>
    )

}

export default ContactState;
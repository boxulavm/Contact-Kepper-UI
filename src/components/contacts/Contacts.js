import React, { useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ContactContext from '../../context/contacts/contactContext'
import Spinner from '../layout/Spinner'
import ContactItem from './ContactItem'

import './Contacts.css'

const Contacts = () => {
    const contactContext = useContext(ContactContext)

    const { contacts, filtered, getContacts, loading } = contactContext;

    useEffect(() => {
        getContacts();
        // eslint-disable-next-line
    }, [])

    if( contacts !== null && contacts.length === 0 && !loading){
        return <h4>Please add a contact</h4>
    }

    return (
        <>
        <small>Data from : <a href="https://jsonplaceholder.typicode.com/users" target="_blank">https://jsonplaceholder.typicode.com/users</a></small>
        {contacts !== null && !loading ? (
                    <TransitionGroup>

                    { filtered !== null ? filtered.map(contact => (
                        <CSSTransition key={contact.id} timeout={500} classNames="item">
                            <ContactItem contact={contact} />
                        </CSSTransition>
                        )) :contacts.map(contact =>
                        <CSSTransition key={contact.id} timeout={500} classNames="item"> 
                            <ContactItem contact={contact} />
                        </CSSTransition>
                    ) }
            
                    </TransitionGroup>
        ) : <Spinner /> }


        </>
    )
}

export default Contacts

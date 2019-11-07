import React, { useState, useContext, useEffect } from 'react'
import ContactContext from '../../context/contacts/contactContext'


const ContactForm = () => {

    const contactContext = useContext(ContactContext)

    const { addContact, current, clearCurrent, updateContact } = contactContext

    useEffect(() => {
        if(current !== null) {
            setContact(current);
        } else {
            setContact({
                name: '',
                email: '',
                phone: '',
    
            })
        }
    }, [contactContext, current])

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
    });


    const { name, email, phone, } = contact;

    const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault();

        if(current ===  null) {
            addContact(contact)
        } else {
            updateContact(contact)
        }
        clearAll();
    }

    const clearAll = () => {
        clearCurrent();
    }

    return (
        <form onSubmit={onSubmit} className='form-group ContactForm p-3 mb-4 sticky-top'>
            <h3 className="text-primary mb-3">{ current ? 'Edit Contact' : 'Add Contact'}</h3>
            <input className='form-control' type="text" placeholder="Name" name="name" required value={name} onChange={onChange}  />
            <input className='form-control my-2' type="email" placeholder="Email" name="email" required value={email} onChange={onChange}  />
            <input className='form-control' type="text" placeholder="Phone" name="phone" required value={phone} onChange={onChange}  />

            <div>
                <input type="submit" value={ current ? 'Update Contact' : 'Add Contact'} className='btn btn-primary btn-block my-4' />
            </div>
            { current && <div>
                <button className="btn btn-info btn-block" onClick={clearAll} >Clear</button>
            </div>}
        </form>
    )
}

export default ContactForm

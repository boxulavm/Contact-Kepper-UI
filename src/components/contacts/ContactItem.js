import React, { useContext } from 'react'
import ContactContext from '../../context/contacts/contactContext'

const ContactItem = ({ contact }) => {
    const contactContext = useContext(ContactContext);
    const { deleteContact, setCurrent, clearCurrent } = contactContext

    const { id, name, email, phone } = contact;

    const onDelete = () => {
        deleteContact(id);
        clearCurrent()
    }

    return (
        <div className="card text-white contact-card mb-3 shadow">
            <div className="card-header">

            <h5 className='text-primary'>
                {name}{' '}
                
            </h5>

            </div>
            <div className="card-body">
                { email && ( <h6><i className="fas fa-envelope-open mr-2"></i>  { email }</h6> )}
                { phone && ( <h6><i className="fas fa-phone mr-2"></i>   { phone }</h6> )}
                <hr/>

                <button className="btn btn-primary mr-2" onClick={() => setCurrent(contact) } >Edit</button>
                <button className="btn btn-info" onClick={onDelete}  >Delete</button>

            </div>
        </div>
    )
}

export default ContactItem

import ContactItem from './Contact_Item';

function ContactList({contacts}){
    return(
        <div className="contact-list">
            {
                contacts.map((contact) => (
                    <ContactItem key={contact.id} {...contact} />
                ))
            }
        </div>
    );
}

export default ContactList;
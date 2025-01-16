import React from "react";
import ContactItemBody from './Contact_Item_Body.jsx';
import ContactItemImage from './Contact_Item_Image.jsx';

function ContactItem({imageUrl, name, tag}){
    return(
        <div className="contact-item">
            <ContactItemImage imageUrl={imageUrl} />
            <ContactItemBody name={name} tag={tag} />
        </div>
    )
}

export default ContactItem;
import React from "react";
import ContactItemBody from './Contact_Item_Body.jsx';
import ContactItemImage from './Contact_Item_Image.jsx';
import DeleteButton from './Delete_Button.jsx';

function ContactItem({imageUrl, name, tag, id, onDelete}){
    return(
        <div className="contact-item">
            <ContactItemImage imageUrl={imageUrl} />
            <ContactItemBody name={name} tag={tag} />
            <DeleteButton id={id} onDelete={onDelete}/>
        </div>
    )
}

export default ContactItem;
import React from "react";
import ContactList from "./Contact_List";
import {getData} from '../utils/data';

function ContactApp(){
    const contacts = getData();

    return(
        <div className="contact-app">
            <h1>Contacts</h1>
            <ContactList contacts={contacts} />
        </div>
    );
}

export default ContactApp;
import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import "./styles.css";

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: "Hamza",
            phone_number: "3254"
        },
        {
            fullname: "Cengiz",
            phone_number: "6572"
        },
        {
            fullname: "Gökçe",
            phone_number: "1324"
        },
        {
            fullname: "Aybüke",
            phone_number: "8976"
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);

    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    );
}

export default Contacts;
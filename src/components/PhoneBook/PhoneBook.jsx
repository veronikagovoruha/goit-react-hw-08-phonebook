import { useSelector } from "react-redux";

import Section from "./Section";
import FormAddContact from "./FormAddContact";
import ContactList from "./ContactList";
import Filter from "./Filter";

import { getFilteredItems }  from "../../redux/phones/phonesSelector";

import styles from './phoneBook.module.css'


const PhoneBook = () => {
    const filteredItems = useSelector(getFilteredItems);

    return (
        <div className={styles.phoneBook} >
            <Section title="Phonebook">
                <FormAddContact />
            </Section>

            <Section title="Contacts">
                <Filter />
                
                <ContactList phones={filteredItems}/>
            </Section>

        </div>
    )

}

export default PhoneBook;
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import Section from "./Section";
import FormAddContact from "./FormAddContact";
import ContactList from "./ContactList";
import Filter from "./Filter";

import { getFilteredItems }  from "../../redux/phones/phonesSelector";

import styles from './phoneBook.module.css'
import { fetchPhones } from "redux/phones/phonesOperation";


const PhoneBook = () => {
    const filteredItems = useSelector(getFilteredItems);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPhones());
    }, [dispatch]);

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
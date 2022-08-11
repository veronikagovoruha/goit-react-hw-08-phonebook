import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";
import { useCallback } from "react";

import Section from "./Section";
import FormAddContact from "./FormAddContact";
import ContactList from "./ContactList";
import Filter from "./Filter";

import {
    add,
    remove,
  } from "../../redux/phones/phone-item/phones-reducer-slice";
import getPhones from "../../redux/phones/phone-item/phones-selector";
  
import { change } from "../../redux/phones/phone-filter/phones-filter-reducer-slice";
import { getFilteredItems } from "../../redux/phones/phone-filter/phones-filter-selector";

import styles from './phoneBook.module.css'


const PhoneBook = () => {
    const phones = useSelector(getPhones);
    const filteredItems = useSelector(getFilteredItems);
    const dispatch = useDispatch();

    const onAddPhone = useCallback(
        (obj) => {
          const isInclude = phones.find(
            ({ name }) => name.toLowerCase() === obj.name.toLowerCase()
          );
          if (!isInclude) {
            dispatch(add(obj));
            return;
          }
          alert(`${isInclude.name} is already in contacts`);
          return;
        },
        [phones, dispatch]
      );
    
      const onRemovePhone = useCallback(
        (id) => {
          dispatch(remove(id));
        },
        [dispatch]
      );
    
      const changeFilterState = useCallback(
        ({ target: { value } }) => {
          dispatch(change(value.trim()));
        },
        [dispatch]
      );

        return (
            <div className={styles.phoneBook} >
                <Section title="Phonebook">
                    <FormAddContact onSubmit={onAddPhone} />
                </Section>

                <Section title="Contacts">
                    <Filter onChange={changeFilterState} />
                    
                    <ContactList phones={filteredItems} removeContact={onRemovePhone}/>
                </Section>

            </div>
        )

}

export default PhoneBook;
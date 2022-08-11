import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";
import { useCallback } from "react";

import Section from "./Section";
import FormAddContact from "./FormAddContact";
import ContactList from "./ContactList";
import Filter from "./Filter";

import {
    addPhone,
    removePhone,
  } from "../../redux/phones/phonesSlice";
import { getPhones, getFilteredItems }  from "../../redux/phones/phonesSelector";
  
import { changeFilter } from "../../redux/phones/phonesSlice";

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
            dispatch(addPhone(obj));
            return;
          }
          alert(`${isInclude.name} is already in contacts`);
          return;
        },
        [phones, dispatch]
      );
    
      const onRemovePhone = useCallback(
        (id) => {
          dispatch(removePhone(id));
        },
        [dispatch]
      );
    
      const changeFilterState = useCallback(
        ({ target: { value } }) => {
          dispatch(changeFilter(value.trim()));
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
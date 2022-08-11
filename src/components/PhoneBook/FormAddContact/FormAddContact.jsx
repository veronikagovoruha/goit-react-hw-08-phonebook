import { useState } from "react";
import styles from './formAddContact.module.css'
import PropTypes from "prop-types";

import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";
import { useCallback } from "react";

import { getPhones }  from "../../../redux/phones/phonesSelector";

import {
    addPhone,
  } from "../../../redux/phones/phonesSlice";

const FormAddContact = () => {
    const phones = useSelector(getPhones);
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

    const [form, setForm] = useState({
        name: "",
        number: ""
    });

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddPhone({ ...form });
        setForm({
            name: "",
            number: ""
        })
    }
    const { name, number } = form;
    return (
        <div className={styles.wrappper}>
            <form className={styles.form} action="" onSubmit={handleSubmit}>
                <label className={styles.label} htmlFor="">Name
                    <input
                        value={name}
                        className={styles.input}
                        onChange={handleChange}
                        name="name"
                        type="text"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>

                <label className={styles.label} htmlFor="">
                    Number
                    <input
                        value={number}
                        className={styles.input}
                        onChange={handleChange}
                        name="number"
                        type="text"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>

                <div className={styles.group}>
                    <button className={styles.button} type="submit">Add contact</button>
                </div>
            </form>
        </div>

    )
}

FormAddContact.defaultProps = {
    onSubmit: () => { },
}
FormAddContact.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default FormAddContact;
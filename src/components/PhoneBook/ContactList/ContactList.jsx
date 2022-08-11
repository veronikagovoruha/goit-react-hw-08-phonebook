import styles from './contact.module.css';
import PropTypes from "prop-types";

import { useCallback } from "react";
import { useDispatch } from "react-redux/es/exports";

import {
    removePhone,
  } from "../../../redux/phones/phonesSlice";

const ContactList = ({ phones }) => {
    const dispatch = useDispatch();

    
      const onRemovePhone = useCallback(
        (id) => {
          dispatch(removePhone(id));
        },
        [dispatch]
      );

    const elem = phones.map(({ id, name, number }) => {
        return (<li key={id} className={styles.item}>
            {name}: {number}
            <button className={styles.button} onClick={() => onRemovePhone(id)}>Delete</button>
        </li >)
    });

    return (
        <ul className={styles.list}>
            {elem}
        </ul>
    )
}


ContactList.defaultProps = {
    phones: [],
    removeContact: () => { },
};
ContactList.propTypes = {
    removeContact: PropTypes.func.isRequired,
    phones: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
};

export default ContactList;
import styles from './contact.module.css'
import PropTypes from "prop-types"

const ContactList = ({ phones, removeContact }) => {
    const elem = phones.map(({ id, name, number }) => {
        return (<li key={id} className={styles.item}>
            {name}: {number}
            <button className={styles.button} onClick={() => removeContact(id)}>Delete</button>
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
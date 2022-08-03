import { useState } from "react";
import styles from './formAddContact.module.css'
import PropTypes from "prop-types"

const FormAddContact = ({onSubmit}) => {
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
        onSubmit({ ...form });
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

// class FormAddContact extends Component {
    // state = {
    //     name: "",
    //     number: ""
    // }

    // handleChange = ({ target }) => {
    //     const { name, value } = target;
    //     this.setState({
    //         [name]: value
    //     })
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.onSubmit({ ...this.state });
    //     this.setState({
    //         name: "",
    //         number: ""
    //     })
    // }

    // render() {
    //     const { handleChange, handleSubmit } = this;
        // const { name, number } = this.state;
        // return (
        //     <div className={styles.wrappper}>
        //         <form className={styles.form} action="" onSubmit={handleSubmit}>
        //             <label className={styles.label} htmlFor="">Name
        //                 <input
        //                     value={name}
        //                     className={styles.input}
        //                     onChange={handleChange}
        //                     name="name"
        //                     type="text"
        //                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        //                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        //                     required
        //                 />
        //             </label>

        //             <label className={styles.label} htmlFor="">
        //                 Number
        //                 <input
        //                     value={number}
        //                     className={styles.input}
        //                     onChange={handleChange}
        //                     name="number"
        //                     type="text"
        //                     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        //                     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        //                     required
        //                 />
        //             </label>

        //             <div className={styles.group}>
        //                 <button className={styles.button} type="submit">Add contact</button>
        //             </div>
        //         </form>
        //     </div>

        // )
//     }
// }

FormAddContact.defaultProps = {
    onSubmit: () => { },
}
FormAddContact.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default FormAddContact;
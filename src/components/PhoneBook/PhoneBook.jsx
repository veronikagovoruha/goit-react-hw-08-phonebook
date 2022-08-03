import { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";

import Section from "./Section";
import FormAddContact from "./FormAddContact";
import ContactList from "./ContactList";
import Filter from "./Filter"

import styles from './phoneBook.module.css'


const PhoneBook = () => {
    const [phones, setPhones] = useState([]);
    const [filter, setFilter] = useState("");

    const firstRender = useRef(true);

    useEffect(() => {
        const phones = JSON.parse(localStorage.getItem("phones"));
        if(phones && phones.length){
            setPhones([...phones]);
        }
    }, []);

    useEffect(() => {
        function compare() {
          const currentState = JSON.stringify(phones);
          const localStorageState = localStorage.getItem("phones");
          if (currentState === localStorageState) {
            return true;
          }
          return false;
        }
    
        if (!firstRender.current) {
          if (!compare()) {
            localStorage.setItem("phones", JSON.stringify(phones));
          }
        } else {
          firstRender.current = false;
        }
      }, [phones]);

    const addContact = ({ name, number }) => {
        if (isExistingContact(name)) {
            alert(`${name} is already in contacts`);
            return;
        }
        const newContact = {
            name,
            number,
            id: nanoid()
        };
        setPhones(prevBooks => [...prevBooks, newContact]);
    };

    const removeContact = (id) => {
        setPhones(prevBooks => prevBooks.filter(item => item.id !== id))
    }

    const isExistingContact = (contactName) => {
            return phones.some(({ name }) => {
                return contactName.toLowerCase() === name.toLowerCase();
            })
    };

    const getFilteredContact = () => {
        if (!filter) {
            return phones;
        }
        const filterValue = filter.toLowerCase();
        const filterPhone = phones.filter(({ name }) => {
            const nameValue = name.toLowerCase();
            return nameValue.includes(filterValue);
        });

        return filterPhone;
    };

    const handleFilter = ({target}) => setFilter(target.value)

    const filterPhones = getFilteredContact()


        return (
            <div className={styles.phoneBook} >
                <Section title="Phonebook">
                    <FormAddContact onSubmit={addContact} />
                </Section>

                <Section title="Contacts">
                    <Filter onChange={handleFilter} />
                    <ContactList filterPhones={filterPhones} removeContact={removeContact} />
                </Section>

            </div>
        )

}

// class PhoneBook extends Component {
    // state = {
    //     phones: [],
    //     filter: ""
    // }

    // componentDidMount(){
        // const phones = JSON.parse(localStorage.getItem("phones"));
        // if(phones && phones.length > 0){
        //     this.setState({phones})
        // }
    // }

    // componentDidUpdate(prevProps, prevState) {
        // if(prevState.phones !== this.state.phones) {
        //     localStorage.setItem('phones', JSON.stringify(this.state.phones))
        // }
    // }

    // handleChange = ({ target }) => {
    //     const { name, value } = target;
    //     this.setState({
    //         [name]: value
    //     })
    // }

    // isExistingContact(contactName) {
    //     const { phones } = this.state;
    //     return phones.some(({ name }) => {
    //         return contactName.toLowerCase() === name.toLowerCase();
    //     })
    // }

    // addContact = ({ name, number }) => {
    //     if (this.isExistingContact(name)) {
    //         alert(`${name} is already in contacts`);
    //         return;
    //     }
    //     this.setState(({ phones }) => {
    //         const newContact = {
    //             name,
    //             number,
    //             id: nanoid()
    //         }
    //         return {
    //             phones: [...phones, newContact]
    //         }
    //     });
    // }

    // removeContact = (id) => {
    //     this.setState(({ phones }) => {
    //         return {
    //             phones: phones.filter(item => item.id !== id)
    //         }
    //     })
    // }

    // getFilteredContact() {
    //     const { filter, phones } = this.state;
    //     if (!filter) {
    //         return phones;
    //     }
    //     const filterValue = filter.toLowerCase();
    //     const filterPhone = phones.filter(({ name }) => {
    //         const nameValue = name.toLowerCase();
    //         return nameValue.includes(filterValue);
    //     });

    //     return filterPhone;
    // }

    // render() {
    //     const { handleChange, addContact, removeContact } = this;

    //     const phones = this.getFilteredContact()

    //     return (
    //         <div className={styles.phoneBook} >
    //             <Section title="Phonebook">
    //                 <FormAddContact onSubmit={addContact} />
    //             </Section>

    //             <Section title="Contacts">
    //                 <Filter onChange={handleChange} />
    //                 <ContactList phones={phones} removeContact={removeContact} />
    //             </Section>

    //         </div>
    //     )
    // }
// }

export default PhoneBook;
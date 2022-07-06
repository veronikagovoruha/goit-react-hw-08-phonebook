import styles from './filter.module.css'

const Filter = ({ onChange }) => {
    return (
        <div>
            <p>Find contacts by name</p>
            <input className={styles.input} onChange={onChange} name="filter" type="text" />
        </div>
    )

}

export default Filter;
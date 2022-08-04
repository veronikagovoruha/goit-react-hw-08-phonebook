import styles from './filter.module.css'
import PropTypes from "prop-types"

const Filter = ({ onChange, value }) => {
    return (
        <div>
            <p>Find contacts by name</p>
            <input className={styles.input} value={value} onChange={onChange} name="filter" type="text" />
        </div>
    )

}

Filter.defaultProps = {
    onChange: () => { },
}
Filter.propTypes = {
    onSubmit: PropTypes.func,
}

export default Filter;
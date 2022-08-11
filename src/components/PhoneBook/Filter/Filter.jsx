import { useDispatch } from "react-redux/es/exports";
import { useCallback } from "react";
import { changeFilter } from "../../../redux/phones/phonesSlice";

import styles from './filter.module.css';
import PropTypes from "prop-types";

const Filter = () => {
    const dispatch = useDispatch();

    const changeFilterState = useCallback(
        ({ target: { value } }) => {
          dispatch(changeFilter(value.trim()));
        },
        [dispatch]
      );
    return (
        <div>
            <p>Find contacts by name</p>
            <input className={styles.input} onChange={changeFilterState} name="filter" type="text" />
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
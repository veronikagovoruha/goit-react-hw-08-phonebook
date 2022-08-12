import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";
import { useCallback } from "react";
import { changeFilter } from "../../../redux/phones/phonesSlice";
import { getFilterValue }  from "../../../redux/phones/phonesSelector";

import styles from './filter.module.css';
import PropTypes from "prop-types";

const Filter = () => {
    const filterValue = useSelector(getFilterValue);
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
            <input className={styles.input} value={filterValue} onChange={changeFilterState} name="filter" type="text" />
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
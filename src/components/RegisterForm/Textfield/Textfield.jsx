import { useMemo } from "react";
import { nanoid } from "@reduxjs/toolkit";
import styles from "./textfield.module.css";

const Textfiels = ({label, name, value, onChange, placeholder, type, required}) => {
    const id = useMemo(() => nanoid(), []);

    return(
        <div className={styles.block}>
            {label && <label className={styles.label} htmlFor={id}>{label} </label>}
            <input className={styles.input} id={id} name={name} value={value} onChange={onChange} placeholder={placeholder} required={required} type={type}/>
        </div>
    )
}

Textfiels.defaultProps = {
    type: "text",
    required: false,
}

export default Textfiels;
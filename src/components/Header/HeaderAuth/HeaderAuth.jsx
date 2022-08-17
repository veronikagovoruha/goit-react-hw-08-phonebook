import { NavLink } from "react-router-dom";
import styles from "./header-auth.module.css";

const getClassName = ({isActive}) => {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

const HeaderAuth = () => {
    return (
        <div>
            <NavLink to={"/register"} className={getClassName}>Register</NavLink>
            <NavLink to={"/login"} className={getClassName}>Login</NavLink>
        </div>
    )
}

export default HeaderAuth; 
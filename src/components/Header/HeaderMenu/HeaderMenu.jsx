import { NavLink } from 'react-router-dom';

import { items } from './items';
import styles from './header-menu.module.css';
 
const getLinkClassname = ({ isActive }) => {
    return isActive ? styles.isActive : styles.link;
}

const HeaderMenu = ({isLogin}) => {
    const selectItems = isLogin ?  items : items.filter(item => item.private);
    const elements = selectItems.map(({ id, link, text }) =>
        <li key={id} className={styles.item}>
            <NavLink className={getLinkClassname} to={link}>{text}</NavLink>
        </li>)
    
    return (
        <ul className={styles.list}>
            {elements}
        </ul>)
}
export default HeaderMenu;
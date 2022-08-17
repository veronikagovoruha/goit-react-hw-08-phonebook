import { useSelector, useDispatch } from "react-redux";

import { getUser } from "../../../redux/auth/auth-selector";

import { logout } from "../../../redux/auth/auth-operations";

const UserMenu = () => {
    const {name} = useSelector(getUser);

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());
    }

    return (
        <div>
            {name} 
            <button onClick={onLogout}>Logout</button>
        </div>
    )
}

export default UserMenu;
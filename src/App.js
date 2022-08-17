import Header from 'components/Header';
import UserRoutes from "./UserRoutes";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCurrent } from 'redux/auth/auth-operations';

const App = () =>  {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCurrent());
    }, [dispatch])

        return (
            <div>
                <Header />
                <UserRoutes />
            </div>

        )
}

export default  App
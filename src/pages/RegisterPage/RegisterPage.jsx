import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import useAuth from "../../shared/hooks/useAuth";
import { signup } from "redux/auth/auth-operations";
import RegisterForm from "../../components/RegisterForm";

const RegisterPage = () => {
    const dispatch = useDispatch();
    const isLogin = useAuth();

    if(isLogin) {
        return <Navigate to="/"/>
    }

    const onSignup = (data) => {
        dispatch(signup(data));
    }
    return(
        <div>
           <p>Register Page</p>
            <RegisterForm onSubmit={onSignup} />  
        </div>
    )
}

export default RegisterPage; 
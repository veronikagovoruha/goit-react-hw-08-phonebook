import useForm from "../../shared/hooks/useForm";
import { initialState } from "./initialState";
import { fields } from "./fields";

import Textfield from "./Textfield";

const LoginFrom = ({onSubmit}) => {
    const {state, handleChange, handleSubmit} = useForm({onSubmit, initialState});

    const {email, password} = state;
    return (
        <form onSubmit={handleSubmit}>
            <Textfield value={email} onChange={handleChange} {...fields.email}/>
            <Textfield value={password} onChange={handleChange} {...fields.password}/>
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginFrom;
import useForm from "../../shared/hooks/useForm";
import { initialState } from "./initialState";
import { fields } from "./fields";

import Textfield from "./Textfield";

const RegisterForm = ({onSubmit}) => {
    const {state, handleChange, handleSubmit} = useForm({onSubmit, initialState});

    const {name, email, password} = state;
    return (
        <form onSubmit={handleSubmit}>
            <Textfield value={name} onChange={handleChange} {...fields.name}/>
            <Textfield value={email} onChange={handleChange} {...fields.email}/>
            <Textfield value={password} onChange={handleChange} {...fields.password}/>
            <button type="submit">Register</button>
        </form>
    )
}

export default RegisterForm;
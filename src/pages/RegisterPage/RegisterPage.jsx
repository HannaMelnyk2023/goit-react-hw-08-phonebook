import {useDispatch} from "react-redux";
import { register } from "../../redux/contacts/operations";


export default function RegisterPage() {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget; 
            dispatch(
                register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
                })
            );
            form.reset();
        };

        return (
            <form onSubmit={handleSubmit}>
                <input name = "name" type="text" placeholder="Name" required/>
                <input name = "email" type="email" placeholder="Email" required autoComplete="username"/>
                <input name="password" type="password" placeholder="Password" required autoComplete="new-password" />
                <button type="submit">Register</button>
            </form>
        );
    }

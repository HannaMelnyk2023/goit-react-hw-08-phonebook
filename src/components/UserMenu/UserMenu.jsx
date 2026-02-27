import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';


export const UserMenu = () => {
    const dispatch = useDispatch();
    const email = useSelector(state => state.auth.user.email);

    const handleLogOut = () => {
        dispatch(logOut());
    };  

    return (
        <div>
            <p>Welcome, {email}</p>
            <button type="button" onClick={handleLogOut}>
                Log Out
            </button>
        </div>
    );
};
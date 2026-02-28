import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from './Navigation.module.css';
import { UserMenu } from 'components/UserMenu/UserMenu';

export default function Navigation() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <nav className={css.nav}>
      {isLoggedIn ? (
        <>
          <UserMenu />
          <NavLink to="/contacts" className={css.link}>
            Contacts
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/register" className={css.link}>
            Register
          </NavLink>
          <NavLink to="/login" className={css.link}>
            Log In
          </NavLink>
        </>
      )}
    </nav>
  );
}

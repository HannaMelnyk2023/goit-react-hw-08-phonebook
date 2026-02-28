import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RestrictedRoutes from 'routes/RestrictedRoutes';
import PrivateRoutes from 'routes/PrivateRoutes';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import Navigation from 'components/Navigation/Navigation';

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <RestrictedRoutes redirectTo="/contacts">
              <RegisterPage />
            </RestrictedRoutes>
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoutes redirectTo="/contacts">
              <RegisterPage />
            </RestrictedRoutes>
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoutes redirectTo="/contacts">
              <LoginPage />
            </RestrictedRoutes>
          }
        />

        <Route
          path="/contacts"
          element={
            <PrivateRoutes redirectTo="/login">
              <ContactsPage />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

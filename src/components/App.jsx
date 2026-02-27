import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RestrictedRoutes } from 'routes/RestrictedRoutes';
import { PrivateRoutes } from 'routes/PrivateRouts';
import { PublicRoutes } from 'routes/PublicRoutes';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { ContactPage } from 'pages/ContactPage';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicRoutes />}>
          <Route
            path="register"
            element={
              <RestrictedRoutes redirectTo="/contact">
                <RegisterPage />
              </RestrictedRoutes>
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoutes redirectTo="/contact">
                <LoginPage />
              </RestrictedRoutes>
            }
          />
        </Route>
        <Route
          path="/contacts"
          element={
            <PrivateRoutes redirectTo="/login">
              <ContactPage />
            </PrivateRoutes>
          }
        />
      </Routes>
    </Router>
  );
};

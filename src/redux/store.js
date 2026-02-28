import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { contactsReducer } from './contacts/contactSlice';
import logger from 'redux-logger';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        contacts: contactsReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV === 'development',
});

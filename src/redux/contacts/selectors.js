export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.name;
export const selectUserEmail = state => state.auth.user.email;
export const selectAuthToken = state => state.auth.token;
export const selectFilter = state => state.contacts.filter;
export const selectFilteredContacts = state => {
    const filter = state.contacts.filter.toLowerCase();
    return state.contacts.items.filter(
        contact =>
            contact.name.toLowerCase().includes(filter) ||
            contact.number.includes(filter)
    );
};

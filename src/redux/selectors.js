export const getContacts = state => state.contacts;

export const getStatusFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

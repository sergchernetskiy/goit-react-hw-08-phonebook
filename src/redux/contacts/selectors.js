import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../../redux/filter/selectors';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterValue) => {
    const normalyzeFilter = filterValue.toLowerCase();

    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalyzeFilter)
    );

    return visibleContacts;
  }
);

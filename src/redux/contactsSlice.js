import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    initialContacts: [],
  },
  reducers: {
    addContacts(state, action) {
      state.initialContacts.push(action.payload);
    },
    deleteContacts(state, action) {
      state.initialContacts = state.initialContacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addContacts, deleteContacts } = contactsSlice.actions;

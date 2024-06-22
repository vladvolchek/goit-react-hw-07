import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './contactsOps';
import { addContact } from './contactsOps;';
import { deleteContact } from './contactsOps';

const initialState = {
  items: [],
  loading: false,
  error: null
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;



  })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
    
        state.loading = false;
        state.items = payload
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;


      })
  },
);

const newContact = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = null;



  })
      .addCase(addContact.fulfilled, (state, { payload }) => {
    
        state.loading = false;
        state.items = payload
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;


      })
  },
);

const deleteContacts = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = null;



  })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
    
        state.loading = false;
        state.items = payload
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;


      })
  },
);

export const contactsReducer = contactsSlice.reducer;
export const contactsAdd = newContact.reducer;
export const contactsDelete = deleteContacts.reducer;



// //  reducers: {
//     addContact: (state, action) => {
     
//       state.items.push(action.payload);
//     },
//     deleteContact: (state, action) => {
//       state.items = state.items.filter(contact => contact.id !== action.payload.id);
//     },
//   // }
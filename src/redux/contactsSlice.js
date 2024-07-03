import { createSlice} from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operation";

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    extraReducers: (builder) => {
        builder
        .addCase(addContact.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        })
        .addCase(addContact.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(deleteContact.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                item => item.id === action.payload.id
            );
            state.items.splice(index, 1);
        })
        .addCase(deleteContact.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(fetchContacts.pending, (state, action) => {
            state.isLoading = true;
         })
        .addCase(fetchContacts.fulfilled, (state, action) => { 
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;  
        })
        .addCase(fetchContacts.rejected, (state, action) => { 
            state.isLoading = false;
            state.error = action.payload;
        })
    
    },
});

// export const { addContact, deleteContact, fetchingInProgress, fetchingSuccess, fetchingError } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
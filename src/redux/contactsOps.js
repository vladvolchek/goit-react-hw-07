import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://66768982145714a1bd7208dd.mockapi.io/"
export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkApi) => {

try {
    const { data } = await axios.get('/contacts')
    return data
} catch (error) {
   return thunkApi.rejectWithValue(error.message) 
}

})
export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkApi) => {
    
    try {
        const { data } = await axios.post('/contacts')
       return data 
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkApi) => {
    
    try {
        const { data } = await axios.delete('/contacts')
       return data 
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})


import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


export const fetchCategories=createAsyncThunk(
    "fetchCategories",
     async (_, thunkApi)=>{
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories/menu`);
            return res.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)
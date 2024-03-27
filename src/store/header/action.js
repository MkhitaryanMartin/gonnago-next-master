import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


export const fetchCities=createAsyncThunk(
    "fetchCities",
     async (_, thunkApi)=>{
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/cities`);
            return res.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)
import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories} from "./action";

const initialState = {
    categories:[],
    loader: false,
    error:""
}

const categoriesReducer = createSlice({
    name:"categories",
    initialState: initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchCategories.fulfilled, (state, action)=>{
            state.categories = action.payload.data
                   
        })
    }
});

export default categoriesReducer.reducer;
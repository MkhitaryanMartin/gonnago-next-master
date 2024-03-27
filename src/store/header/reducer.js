import { createSlice } from "@reduxjs/toolkit";
import { fetchCities } from "./action";

const initialState = {
    data:[],
    loader: false,
    error:"",
    isOpen:{
        isOpenCitiMenu:false,
        isOpenMenu:false,
        isOpenBottomDrower:false,
    isOpenSearchDrower: false,
    },
    activeValue: {
        category:[],
        citi:"armenia",
        searchCity:"",
        lang:"Am",
        genre:""
    }
}

const headerReducer = createSlice({
    name:"cities",
    initialState: initialState,
    reducers:{
        setIsOpen : (state, action)=>{
            state.isOpen = {...state.isOpen, [action.payload.name]: action.payload.value}
        },
        setActiveValue : (state, action)=>{
            state.activeValue = action.payload.name === "category" ? {...state.activeValue, [action.payload.name]: action.payload.value, genre:""}:{...state.activeValue, [action.payload.name]: action.payload.value}
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchCities.fulfilled, (state, action)=>{
            state.data = action.payload.data
                   
        })
    }
});


export const {setActiveValue, setIsOpen} = headerReducer.actions;
export default headerReducer.reducer;
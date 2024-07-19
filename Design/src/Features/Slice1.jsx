import { createSlice } from "@reduxjs/toolkit";

const slice1=createSlice({
    name:'Login',
    initialState:{toggle:false},
    reducers:{
        changeTo:(state,action)=>{
            console.log(action.payload);
            state.toggle=action.payload
        }
    }
})
export default slice1.reducer;
export const {changeTo}=slice1.actions;
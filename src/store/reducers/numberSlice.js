import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    number : 0,
    u:[]
}

const numberSlice = createSlice({
    name:'number',
    initialState,

    reducers:{
        increment: (state,action) => {
            state.number += action.payload 
        },
        decrement: (state , action ) => {
            state.number -= action.payload
        }
    }
}) 

export const {increment , decrement} = numberSlice.actions;
export default numberSlice.reducer
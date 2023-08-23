import { createSlice } from "@reduxjs/toolkit";

let initialState = [
    {
        id:"1",
        price:'2000',
        spec:{
            cpu:'i3',
            ram:'16GB',
            HDD:'1TB'
        }
    },
]

const laptopSlice = createSlice({
    name:'laptop',
    initialState,
    reducers:{
        ADD_LAPTOP: (state , action) =>{
            console.log(action.payload)
            state.push(action.payload)
        }
    }

})

export default laptopSlice.reducer
export const {ADD_LAPTOP} =  laptopSlice.actions

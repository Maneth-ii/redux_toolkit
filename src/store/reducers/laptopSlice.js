import { createSlice, nanoid } from "@reduxjs/toolkit";

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
        ADD_LAPTOP:{
            reducer: (state , action) =>{
                console.log(action.payload)
                state.push(action.payload)
            },
            prepare: ({price , spec}) =>{
                return{
                    payload:{
                        id:nanoid(),
                        price,
                        spec
                    }}
            }
            
    }

            }
})

export default laptopSlice.reducer
export const {ADD_LAPTOP} =  laptopSlice.actions

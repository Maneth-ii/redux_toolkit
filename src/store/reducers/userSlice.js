import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name:'user',
	initialState : {
		NOU:39
	},
	reducers:{
		userIncrement: (state , action) =>{
			state.NOU +=action.payload
		},
		
		userDecrement: (state , action) =>{
			state.NOU -=action.payload
		}
	}

})

export default userSlice.reducer;
export const {userIncrement , userDecrement } = userSlice.actions;
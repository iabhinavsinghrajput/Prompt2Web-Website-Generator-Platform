import { createSlice } from '@reduxjs/toolkit'



const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null
  },
  reducers: {
    setUserData: (state, action) => {
      if (action.payload) {
        state.userData = {
          ...state.userData,
          ...action.payload,
          token: action.payload.token || state.userData?.token
        }
      } else {
        state.userData = null
      }
    },

  },
})

// Action creators are generated for each case reducer function
export const { setUserData } = userSlice.actions
export default userSlice.reducer
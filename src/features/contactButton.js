import { createSlice } from '@reduxjs/toolkit'

export const contactButton = createSlice({
  name: 'contacts',
  initialState: {
    value: 0,
  },
  reducers: {

    createcontact: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { createcontact } = counterSlice.actions

export default contactButton.reducer
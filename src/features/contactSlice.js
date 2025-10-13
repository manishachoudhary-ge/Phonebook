import { Work } from '@mui/icons-material'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentContact: {
    name: "",
    mobileNo: "",
    address: "",
    Work: "" ,
    avatar: "",
  },
  contactList: [],
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {

    // createcontact: (state, action) => {
    //   state.value += action.payload
    //   // state.value.push(action.payload)
    // },
    createContact: (state, action) =>{
      state.currentContact[action.payload.field] = action.payload.value;
    },
    addContact: (state) =>{
      state.contactList.push(state.currentContact);
      state.currentContact = initialState.currentContact; // Reset currentContact after adding
    }
  },
})

export const { createContact, addContact } = contactSlice.actions

export default contactSlice.reducer

























// import { Work } from '@mui/icons-material'
// import { createSlice } from '@reduxjs/toolkit'

// export const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     name: "",
//     mobileNo: "",
//     address: "",
//     Work: ""
//   },
//   reducers: {

//     // createcontact: (state, action) => {
//     //   state.value += action.payload
//     //   // state.value.push(action.payload)
//     // },
//     createName: (state, action) =>{
//       state.name = action.payload
//     },
//     createMobileno: (state, action) =>{
//       state.mobileNo = action.payload
//     },
//     createAddress: (state, action) =>{
//       state.address = action.payload
//     },
//     creatework: (state, action) =>{
//       state.Work = action.payload
//     }
//   },
// })

// export const { createName,  createMobileno, createAddress, creatework } = contactSlice.actions

// export default contactSlice.reducer
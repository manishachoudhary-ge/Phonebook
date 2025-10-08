import { configureStore } from '@reduxjs/toolkit'
import { createcontact } from '../features/contactButton'

export default configureStore({
  reducer: {
    contact: createcontact

  },
})
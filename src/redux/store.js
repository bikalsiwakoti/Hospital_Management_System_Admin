import { configureStore } from '@reduxjs/toolkit'
import customerSlice from './slices/CustomerSlice'
import productSlice from './slices/ProductSlice'
import doctorSlice from './slices/DoctorSlice'
import staffSlice from './slices/StaffSlice'

export const store = configureStore({
  reducer: {
    // doctor: doctorReducer,
    customer: customerSlice,
    product: productSlice,
    doctor: doctorSlice,
    staff: staffSlice,
  },
})
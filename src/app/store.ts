import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import { characterSlice } from "../features/characters/characterSlice"

import { userSlice } from "../features/users/userSlice"
import authSlice from "../features/authorization/authSlice"
import { productSlice } from "../features/products/productSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productSlice.reducer,
    characters:characterSlice.reducer,
    users:userSlice.reducer,
    auth: authSlice.reducer,
    // cart: cartReducer,
  
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

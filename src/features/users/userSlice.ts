import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addUsers, loadUsers } from './userAction';
import UserState from './types/UserState';

const initial: UserState = {
 users: [],
 error: null,
 isLoading:false,
};

export const userSlice = createSlice({
  name: 'users',
  initialState: initial,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadUsers.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loadUsers.fulfilled, (state, action) => {
        state.isLoading = false
        state.users = action.payload
      })
      .addCase(loadUsers.rejected, (state, action) => {
        state.isLoading = false
        state.users = []
        state.error = action.payload as string
      })
      .addCase(addUsers.fulfilled, (state, action) => {
        state.users.push(action.payload)
      })
  },
});

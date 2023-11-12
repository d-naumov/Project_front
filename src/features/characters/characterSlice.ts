import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CharacterState from './types/CharacterState';
import { loadCharacters } from './characterAction';


const initial: CharacterState = {
 characters: [],
 error: null,
 isLoading:false,
};

export const characterSlice = createSlice({
  name: 'characters',
  initialState: initial,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCharacters.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loadCharacters.fulfilled, (state, action) => {
        state.isLoading = false
        state.characters = action.payload
      })
      .addCase(loadCharacters.rejected, (state, action) => {
        state.isLoading = false
        state.characters = []
        state.error = action.payload as string
      })
  },
});



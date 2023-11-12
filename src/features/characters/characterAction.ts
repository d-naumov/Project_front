import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadCharacters = createAsyncThunk(
  'characters/loadCharacters',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      return response.data.results;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

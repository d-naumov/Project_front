import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CreateUserRequest } from './types/userRequest';

export const loadUsers = createAsyncThunk(
  'users/users',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://reqres.in/api/users/');
      return response.data.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)
export const deleteUsers = createAsyncThunk(
  'users/deleteUsers',
  async (id: string | number, thunkAPI) => {
    try {
      const res = await axios.delete(`https://reqres.in/api/users/${id}`)
      return res.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)
export const addUsers = createAsyncThunk(
    'users/addUsers',
    async (user: CreateUserRequest, thunkAPI) => {
      try {
        console.log(user);
        const res = await axios.post(`https://reqres.in/api/users/`, user)
       
        return res.data
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message)
      }
    }
  )
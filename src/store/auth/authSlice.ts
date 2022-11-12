/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  status: string; // checking not-authenticated authenticated
  uid?: string | null;
  email?: string | null;
  displayName?: string | null;
  errorMessage?: string | null;
}

const initialState: AuthState = {
  status: 'checking', // checking not-authenticated authenticated
  uid: null,
  email: null,
  displayName: null,
  errorMessage: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state: any, { payload }: any) => {
      state.status = 'authenticated', // checking not-authenticated authenticated
        state.uid = payload.uid,
        state.email = payload.email,
        state.displayName = payload.displayName,
        state.errorMessage = payload.errorMessage
    },
    logOut: (state: any, { payload }: any) => {
      state.status = 'not-authenticated', // checking not-authenticated authenticated
        state.uid = null,
        state.email = null,
        state.displayName = null,
        state.errorMessage = payload?.errorMessage
    },
    checkingCredentials: (state: any) => {
      state.status = 'checking'
    },
    finishCheckingCredentials: (state: any) => {
      state.status = 'authenticated'
    },
    setMessage: (state: any, { payload }: any) => {
      state.errorMessage = payload?.errorMessage
    }
  }
});
// Action creators are generated for each case reducer function
export const { login, logOut, checkingCredentials, finishCheckingCredentials, setMessage } = authSlice.actions;
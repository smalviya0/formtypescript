// import { createSlice } from '@reduxjs/toolkit';

// export const signUpSlice = createSlice({
//   name: 'signUp',
//   initialState: {
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     errorMessage: null,
//   },
//   reducers: {
//     setName: (state, action) => {
//       state.name = action.payload;
//     },
//     setEmail: (state, action) => {
//       state.email = action.payload;
//     },
//     setPassword: (state, action) => {
//       state.password = action.payload;
//     },
//     setConfirmPassword: (state, action) => {
//       state.confirmPassword = action.payload;
//     },
//     setError: (state, action) => {
//       state.errorMessage = action.payload;
//     },
//     clearForm: (state) => {
//       state.name = '';
//       state.email = '';
//       state.password = '';
//       state.confirmPassword = '';
//       state.errorMessage = null;
//     },
//   },
// });

// export const {
//   setName,
//   setEmail,
//   setPassword,
//   setConfirmPassword,
//   setError,
//   clearForm,
// } = signUpSlice.actions;

// export default signUpSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SignUpState {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  errorMessage: string | null;
}

const initialState: SignUpState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  errorMessage: null,
};

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action: PayloadAction<string>) => {
      state.confirmPassword = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
    clearForm: (state) => {
      state.name = '';
      state.email = '';
      state.password = '';
      state.confirmPassword = '';
      state.errorMessage = null;
    },
  },
});

export const {
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  setError,
  clearForm,
} = signUpSlice.actions;

export default signUpSlice.reducer;

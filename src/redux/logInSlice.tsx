// import { createSlice } from '@reduxjs/toolkit';

// export const logInSlice = createSlice({
//   name: 'signIn',
//   initialState: {
//     email: '',
//     password: '',
//     logInFlag : false,
//   },
//   reducers: {

//     setEmail: (state, action) => {
//       state.email = action.payload;
//     },
//     setPassword: (state, action) => {
//       state.password = action.payload;
//     },
//     setlogInFlag:(state, action)=>{
//       state.logInFlag = action.payload;
//     }
    
//   },
// });

// export const {
//   setEmail,
//   setPassword,
//   setlogInFlag
// } = logInSlice.actions;

// export default logInSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LogInState {
  email: string;
  password: string;
  logInFlag: boolean;
}

const initialState: LogInState = {
  email: '',
  password: '',
  logInFlag: false,
};

export const logInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setlogInFlag: (state, action: PayloadAction<boolean>) => {
      state.logInFlag = action.payload;
    },
  },
});

export const { setEmail, setPassword, setlogInFlag } = logInSlice.actions;

export default logInSlice.reducer;

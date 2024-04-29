import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get, post } from "../api";

export const getUser = createAsyncThunk("/getUser", async () => {
  const response = await get("/user");
  return response.data;
});
export const getProfile = createAsyncThunk("/getProfile", async (body) => {
  const response = await post("/userprofile", { userID: body.id });
  return response.data;
});
export const getAllUsers = createAsyncThunk("/getAllUsers", async () => {
  const response = await get("/getAllUsers");
  return response.data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userData: null,
    role: "",
    user: {
      email: "",
      emailExist: false,
      displayName: "",
      otp: "",
    },
    allUsers: [],
    token: "",
    mood: "",
    region: "",
    isLoading: false,
    error: "",
    rechargeModel: false,
    profileModel: false,
    payoutModel: false,
    paymentModel: false,
    paymentSuccess: false,
    paymentError: false,
    plan: "",
  },
  reducers: {
    setError: (state, { payload }) => {
      state.error = payload;
    },
    setRole: (state, { payload }) => {
      state.role = payload;
    },
    setToken: (state, { payload }) => {
      state.token = payload;
    },
    setUser: (state, { payload }) => {
      if (payload?.email) {
        state.user = {
          ...state.user,
          emailExist: payload?.emailExist,
          email: payload.email,
        };
      }
      if (payload?.displayName) {
        state.user.displayName = payload.displayName;
      }
      if (payload?.emailExist) {
        state.user.emailExist = payload.emailExist;
      }
      if (payload?.otp) {
        state.user.otp = payload.otp;
      }
    },
    setMood: (state, { payload }) => {
      state.mood = payload;
    },
    setRegion: (state, { payload }) => {
      state.region = payload;
    },
    userData: (state, { payload }) => {
      state.userData = payload;
      state.role = payload?.role;
    },
    setRechargeModel: (state, { payload }) => {
      state.rechargeModel = payload;
    },
    setProfileModel: (state, { payload }) => {
      state.profileModel = payload;
    },
    setPayoutModel: (state, { payload }) => {
      state.payoutModel = payload;
    },
    setPaymentModel: (state, { payload }) => {
      state.paymentModel = payload?.paymentModel;
      state.plan = payload?.package;
      state.rechargeModel = false;
    },
    setPaymentStatus: (state, { payload }) => {
      console.log("RRRRRRRRRRRRRRRRRRR", payload);
      state.paymentModel = false;
      state.paymentSuccess = payload.paymentSuccess;
      state.paymentError = payload.paymentError;
    },
    setMessages: (state, { payload }) => {
      state.userData.messages = payload;
    },

    deleteUser: (state, action) => {
      let { index } = action.payload;
      state.users.splice(index, 1);
    },
    setAllModels: (state, { payload }) => {
      state.rechargeModel = payload.rechargeModel;
      state.profileModel = payload.profileModel;
      state.payoutModel = payload.payoutModel;
      state.paymentModel = payload.paymentModel;
      state.paymentSuccess = payload.paymentSuccess;
      state.paymentError = payload.paymentSuccess;
    },
  },

  extraReducers: {
    [getUser.pending]: (state) => {
      state.isLoading = true;
    },
    [getProfile.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.userData = action.payload;
    },
    [getProfile.fulfilled]: (state, action) => {
      // state.userData = state?.userData
      //   ? {
      //       ...state.userData,
      //       ...action.payload.data,
      //       ...action.payload.metadata,
      //     }
      //   : { ...action.payload.data, ...action.payload.metadata };
      state.userData =  {  ...action.payload.metadata, ...action.payload.data };
      state.isLoading = false;
      
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.allUsers = action.payload.data;
      state.isLoading = false;
    },
    [getUser.rejected]: (state) => {
      state.isLoading = false;
    },
    [getProfile.rejected]: (state) => {
      state.isLoading = false;
    },
    [getAllUsers.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  userData,
  deleteUser,
  setError,
  setRole,
  setUser,
  setToken,
  setMood,
  setRegion,
  setMessages,
  setRechargeModel,
  setProfileModel,
  setPayoutModel,
  setPaymentModel,
  setPaymentStatus,
  setAllModels
} = authSlice.actions;

export default authSlice.reducer;

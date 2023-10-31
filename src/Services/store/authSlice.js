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
    },
    allUsers: [],
    token: "",
    mood: "",
    region: "",
    isLoading: false,
    error: "",
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
        state.user.email = payload.email;
      }
      if (payload?.displayName) {
        state.user.displayName = payload.displayName;
      }
      if (payload?.emailExist) {
        state.user.emailExist = payload.emailExist;
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
    setMessages: (state, { payload }) => {
      state.userData.messages = payload;
    },

    deleteUser: (state, action) => {
      let { index } = action.payload;
      state.users.splice(index, 1);
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
      state.userData = state?.userData
        ? {
            ...state.userData,
            ...action.payload.data,
            ...action.payload.metadata,
          }
        : { ...action.payload.data, ...action.payload.metadata };
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.allUsers = action.payload.data;
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
  setMessages
} = authSlice.actions;

export default authSlice.reducer;

import {  createSlice } from "@reduxjs/toolkit";

export const conversationSlice = createSlice({
  name: "conversation",
  initialState: {
    vox_token_a: "",
    vox_token_r: "",
    vox_login: "",
    vox_users: {},
    currentConversationId: "",
    conversationHistory: {},
    currentCall: null,
    isLoading: false,
  },
  reducers: {
    setError: (state, { payload }) => {
      state.error = payload;
    },
    setTokens: (state, { payload }) => {
      if (payload.auth_token) {
        state.vox_token_a = payload.auth_token.accessToken;
        state.vox_token_r = payload.auth_token.accessToken;
      }
      if (payload.login) {
        state.vox_login = payload.login;
      }
    },
    setVoxUsers: (state, { payload }) => {
      console.log("setVoxUsers", payload);
      state.vox_users = payload;
    },
    setConversationHistory: (state, { payload }) => {
      state.conversationHistory = payload;
    },
    setCurrentConversationId: (state, { payload }) => {
      state.currentConversationId = payload;
    },
    setCurrentCall: (state, { payload }) => {
      state.currentCall = payload;
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },

  extraReducers: {},
});

export const {
  setError,
  setLoading,
  setTokens,
  setVoxUsers,
  setConversationHistory,
  setCurrentConversationId,
  setCurrentCall
} = conversationSlice.actions;

export default conversationSlice.reducer;

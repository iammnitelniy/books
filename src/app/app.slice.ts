import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  status: "idle" as RequestStatusType,
  error: null as string | null,
  isInitialized: false,
};

export type AppInitialStateType = typeof initialState;
export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";


const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppError: (state, action: PayloadAction<{ error: string | null }>) => {
      state.error = action.payload.error;
    },
    setAppStatus: (state, action: PayloadAction<{ status: RequestStatusType }>) => {
      state.status = action.payload.status;
    },
    setAppInitialized: (state, action: PayloadAction<{ isInitialized: boolean }>) => {
      state.isInitialized = action.payload.isInitialized;
    },
  },
  extraReducers: (builder ) => {
    builder
        .addMatcher((action) => {
          return action.type.endsWith('/pending')

        }, (state) => {

          state.status = 'loading'
        })
        .addMatcher(
            (action) => {
                return action.type.endsWith('/rejected')
            },
            (state, action) => {
                if (action.payload) {
                    state.error = action.payload.messages[0]
                } else {
                    state.error = action.error.message ? action.error.message : 'Some error occurred'
                }
                state.status = 'failed'
            }
        )
        .addMatcher((action) => {
          return action.type.endsWith('/fulfilled')
          return true
        }, (state) => {
          console.log('!!!reducer')
          state.status = 'succeeded'
        })
  }
});

export const appSlice = slice.reducer;
export const appActions = slice.actions;

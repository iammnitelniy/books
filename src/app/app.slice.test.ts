import { appActions, appSlice, AppInitialStateType, RequestStatusType } from "./app.slice.ts"; // Замените на путь к вашему slice


describe("appSlice reducer", () => {
  it("should handle setAppError", () => {
    const initialState: AppInitialStateType = { status: "idle", error: null, isInitialized: false };
    const error = "Some error message";
    const action = appActions.setAppError({ error });
    const nextState = appSlice(initialState, action);
    expect(nextState.error).toEqual(error);
  });

  it("should handle setAppStatus", () => {
    const initialState: AppInitialStateType = { status: "idle", error: null, isInitialized: false };
    const status: RequestStatusType = "loading";
    const action = appActions.setAppStatus({ status });
    const nextState = appSlice(initialState, action);
    expect(nextState.status).toEqual(status);
  });

  it("should handle setAppInitialized", () => {
    const initialState: AppInitialStateType = { status: "idle", error: null, isInitialized: false };
    const isInitialized = true;
    const action = appActions.setAppInitialized({ isInitialized });
    const nextState = appSlice(initialState, action);
    expect(nextState.isInitialized).toEqual(isInitialized);
  });
});


describe("appSlice extraReducers", () => {
  it("should handle action ending with /pending", () => {
    const initialState: AppInitialStateType = { status: "idle", error: null, isInitialized: false };
    const action = { type: "someAction/pending" };
    const nextState = appSlice(initialState, action);
    expect(nextState.status).toEqual("loading");
  });

  it("should handle action ending with /rejected", () => {
    const initialState: AppInitialStateType = { status: "idle", error: null, isInitialized: false };
    const errorMessages = ["Some error message"];
    const action = {
      type: "someAction/rejected",
      payload: { messages: errorMessages },
    };
    const nextState = appSlice(initialState, action);
    expect(nextState.status).toEqual("failed");
    expect(nextState.error).toEqual(errorMessages[0]);
  });

  it("should handle action ending with /fulfilled", () => {
    const initialState: AppInitialStateType = { status: "idle", error: null, isInitialized: false };
    const action = { type: "someAction/fulfilled" };
    const nextState = appSlice(initialState, action);
    expect(nextState.status).toEqual("succeeded");
  });
});
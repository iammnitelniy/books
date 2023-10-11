import {createSlice} from "@reduxjs/toolkit";
import {headerApi} from "../api/header.api.ts";
import {createAppAsyncThunk} from "../../../common/utils/create-app-async-thunk.ts";
import {thunkTryCatch} from "../../../common/utils/thunk-try-catch.ts";

const fetchBooks = createAppAsyncThunk<any, any>(
    "header/fetchBooks",
    async (arg, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {
            const res = await headerApi.getBooks(arg);
                return {books: res.data};
        });
    },
);



const initialState: any = ''

const slice = createSlice({
    name: "header",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.fulfilled, (_state, action) => {
                return action.payload
            })

    },
});


export const bookSearchSlice = slice.reducer;
export const headerThunks = {fetchBooks };



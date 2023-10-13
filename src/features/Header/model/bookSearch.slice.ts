import {createSlice} from "@reduxjs/toolkit";
import {BooksDomainType, getBooksArgType, headerApi} from "../api/header.api.ts";
import {createAppAsyncThunk} from "../../../common/utils/create-app-async-thunk.ts";
import {thunkTryCatch} from "../../../common/utils/thunk-try-catch.ts";
import {handleServerAppError} from "../../../common/utils/handle-server-app-error.ts";

const fetchBooks = createAppAsyncThunk<BooksDomainType, getBooksArgType>(
    "books/fetchBooks",
    async (arg, thunkAPI) => {
        const { dispatch, rejectWithValue } = thunkAPI;
        return thunkTryCatch(thunkAPI, async () => {
            const res = await headerApi.getBooks(arg);
            console.log(res)
            if (res.request.status === 200) {
                return {totalItems: res.data.totalItems, items: res.data.items, startIndex: arg.startIndex};

            }
            else {
                handleServerAppError(res.data, dispatch);
                return rejectWithValue(null);
            }
        });
    },
);



const initialState: BooksDomainType = {
    items: [],
    totalItems: 0
}

const slice = createSlice({
    name: "books",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.fulfilled, (state, action) => {
                if (action.payload.startIndex === '0') {
                    state.items = action.payload.items
                    state.totalItems = action.payload.totalItems
                }
                else {

                    state.items.push(...action.payload.items)

                }
            })


    },
});


export const bookSearchSlice = slice.reducer;
export const headerThunks = {fetchBooks};



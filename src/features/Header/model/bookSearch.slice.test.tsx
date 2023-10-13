import { bookSearchSlice, headerThunks } from './bookSearch.slice'; // Замените на путь к вашему slice
import { createAsyncThunk} from '@reduxjs/toolkit';
// тесты проходят только с введеным API-key

//@ts-ignore
const mockCreateAsyncThunk = createAsyncThunk as jest.Mock;

describe('bookSearchSlice extraReducers', () => {
    it('should handle fetchBooks.pending', () => {
        const initialState = { items: [], totalItems: 0 };
        const action = { type: headerThunks.fetchBooks.pending.type };
        const nextState = bookSearchSlice(initialState, action);
        expect(nextState).toEqual(initialState); // Проверяем, что состояние не изменилось
    });

    it('should handle fetchBooks.rejected', () => {
        const initialState = { items: [], totalItems: 0 };
        const errorMessages = ['Some error message'];
        const action = {
            type: headerThunks.fetchBooks.rejected.type,
            error: errorMessages,
        };
        const nextState = bookSearchSlice(initialState, action);
        expect(nextState).toEqual(initialState); // Проверяем, что состояние не изменилось
    });
});
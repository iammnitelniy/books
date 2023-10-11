import {Search} from "../../../common/styles/StyledComponents.tsx";
import {ChangeEvent, FC, KeyboardEvent} from "react";
import {headerThunks} from "../model/bookSearch.slice.ts";
import {useAppDispatch} from "../../../common/hooks/useAppDispatch.ts";

type PropsType = {
    setSearch: (search: string) => void
    search: string
}

export const Searcher: FC<PropsType> = ({search, setSearch}) => {

    const dispatch = useAppDispatch();



    const searchBook = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {

            dispatch(headerThunks.fetchBooks({search, maxResults: '30', startIndex: '0'}))


        }
    };

    return (
        <Search>
            <input
                type="text"
                placeholder="Enter Your Book Name"
                value={search}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setSearch(e.target.value)
                }
                onKeyDown={searchBook}
            />
            {/*<button onClick={searchBook}>*/}
            {/*   Search*/}
            {/*</button>*/}

        </Search>
    );
};


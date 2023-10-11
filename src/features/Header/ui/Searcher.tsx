import {Search} from "../../../common/styles/StyledComponents.tsx";
import {ChangeEvent, FC, KeyboardEvent, useState} from "react";
import {headerThunks} from "../model/bookSearch.slice.ts";
import {useAppDispatch} from "../../../common/hooks/useAppDispatch.ts";

type PropsType = {

}

export const Searcher: FC<PropsType> = () => {

    const dispatch = useAppDispatch();


    const [search, setSearch] = useState("");

    const searchBook = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {

            dispatch(headerThunks.fetchBooks({search, maxResults: '30'}))


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


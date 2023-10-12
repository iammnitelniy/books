import {Search} from "../../../common/styles/StyledComponents.tsx";
import {ChangeEvent, FC, KeyboardEvent} from "react";
import {headerThunks} from "../model/bookSearch.slice.ts";
import {useAppDispatch} from "../../../common/hooks/useAppDispatch.ts";
import {BooksSortsType, CategoriesType} from "../../Books/ui/Books.tsx";

type PropsType = {
    setSearch: (search: string) => void
    search: string
    setCategory:(value: CategoriesType) => void
    setSortBy: (value: BooksSortsType ) => void
}

export const Searcher: FC<PropsType> = ({search, setSearch, setSortBy, setCategory}) => {

    const dispatch = useAppDispatch();

const onButtonSearchDispatch = () => {
    dispatch(headerThunks.fetchBooks({search, maxResults: '30', startIndex: '0', filter: 'all', order: "relevance"}))
    setSortBy('relevance')
    setCategory('all')
    setSearch('')
}

    const searchBook = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {

            onButtonSearchDispatch()

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
            <button onClick={()=> {onButtonSearchDispatch()}}>
               Search
            </button>

        </Search>
    );
};


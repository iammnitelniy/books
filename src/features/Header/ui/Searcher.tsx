import {ErrorText, Search} from "../../../common/styles/StyledComponents.tsx";
import {ChangeEvent, FC, KeyboardEvent, useState} from "react";
import {headerThunks} from "../model/bookSearch.slice.ts";
import {useAppDispatch} from "../../../common/hooks/useAppDispatch.ts";
import {BooksSortsType, CategoriesType} from "../../Books/ui/Books.tsx";
import {ButtonUniversal} from "../../../common/components/ButtonUniversal.tsx";

type PropsType = {
    setSearch: (search: string) => void
    search: string
    setCategory:(value: CategoriesType) => void
    setSortBy: (value: BooksSortsType ) => void
}

export const Searcher: FC<PropsType> = ({search, setSearch, setSortBy, setCategory}) => {

    const dispatch = useAppDispatch();
    const [error, setError] = useState<string>('');


const onButtonSearchDispatch = () => {
    dispatch(headerThunks.fetchBooks({search, maxResults: '30', startIndex: '0', filter: 'all', order: "relevance"}))
    setSortBy('relevance')
    setCategory('all')

}


    const handleChange = (e: KeyboardEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.value
        setSearch(inputValue);

        if (inputValue.trim() === '') {
            setError('Not only spaces');
        } else if (inputValue.length > 20) {
            setError('Text should be less 20 sym');
        } else {
            setError('');
            if (e.key === "Enter") {

                onButtonSearchDispatch()

            }
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
                onKeyDown={handleChange}
            />
            <ButtonUniversal disabled={!search || error !== ''} callBack={()=> {onButtonSearchDispatch()}} name={'Search'}/>
            {error && <ErrorText>{error}</ErrorText>}

        </Search>
    );
};


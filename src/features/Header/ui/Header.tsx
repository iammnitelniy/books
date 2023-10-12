import {Row1, Row2, StyledHeader} from "../../../common/styles/StyledComponents.tsx";
import {FC} from "react";
import {Searcher} from "./Searcher.tsx";
import {BooksSortsType, CategoriesType} from "../../Books/ui/Books.tsx";


type PropsType = {
    setSearch: (search: string) => void
    search: string
    setCategory:(value: CategoriesType) => void
    setSortBy: (value: BooksSortsType ) => void
}

export const Header: FC<PropsType> = ({search, setSearch, setCategory, setSortBy}) => {


    return (
        <StyledHeader>
            <Row1>
                <h1>
                    Everyone will find theirs

                </h1>
            </Row1>
            <Row2>
                <h2>Find Your Book</h2>
                <Searcher setSearch={setSearch} search={search} setCategory={setCategory} setSortBy={setSortBy}/>
            </Row2>
        </StyledHeader>
    );
};


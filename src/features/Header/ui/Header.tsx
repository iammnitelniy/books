import {Row1, Row2, StyledHeader} from "../../../common/styles/StyledComponents.tsx";
import {FC} from "react";
import {Searcher} from "./Searcher.tsx";


type PropsType = {
    setSearch: (search: string) => void
    search: string
}

export const Header: FC<PropsType> = ({search, setSearch}) => {


    return (
        <StyledHeader>
            <Row1>
                <h1>
                    A room without books is like
                    <br /> a body without a soul.
                </h1>
            </Row1>
            <Row2>
                <h2>Find Your Book</h2>
                <Searcher setSearch={setSearch} search={search}/>
            </Row2>
        </StyledHeader>
    );
};

